import { useEffect, useState, useCallback, useRef } from 'react';
import { ref, onValue, off, get } from 'firebase/database';
import { db } from '../firebase';

/**
 * Bentuk data provinsi setelah normalisasi.
 * @typedef {Object} Province
 * @property {string} name
 * @property {number} lat
 * @property {number} lng
 * @property {string} sentiment  // 'positif' | 'negatif' | 'netral'
 * @property {number} total
 */

/**
 * Normalisasi value dari Firebase (array/object) menjadi array Province.
 * Mengabaikan entry null / tanpa lat-lng.
 * @param {any} val
 * @returns {Province[]}
 */
function normalize(val) {
    if (!val) return [];
    let list = [];
    if (Array.isArray(val)) {
        list = val;
    } else if (typeof val === 'object') {
        // fallback jika suatu saat Anda migrasi ke object keyed
        list = Object.values(val);
    }
    return list
        .filter(Boolean)
        .filter(
            (p) =>
                typeof p === 'object' &&
                typeof p.lat === 'number' &&
                typeof p.lng === 'number' &&
                p.name
        )
        .map((p) => ({
            name: p.name,
            lat: p.lat,
            lng: p.lng,
            sentiment: p.sentiment || 'netral',
            negative: typeof p.negative === 'number' ? p.negative : 0,
            positive: typeof p.positive === 'number' ? p.positive : 0,
            neutral: typeof p.neutral === 'number' ? p.neutral : 0,
            total: typeof p.total === 'number' ? p.total : 0
        }));
}

/**
 * Hook realtime Provinces.
 * @param {string} path default "Provinces"
 * @returns {{
 *   data: Province[],
 *   mapByName: Record<string,Province>,
 *   loading: boolean,
 *   error: Error|null,
 *   refresh: () => Promise<void>,
 *   summary: { totalProvinsi: number, totalBerita: number, bySentiment: Record<string,number> }
 * }}
 */
export function useProvincesRealtime(path = 'Provinces') {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const mountedRef = useRef(true);

    // Realtime subscription
    useEffect(() => {
        mountedRef.current = true;
        const r = ref(db, path);
        const unsubscribe = onValue(
            r,
            (snap) => {
                if (!mountedRef.current) return;
                const norm = normalize(snap.val());
                setData(norm);
                setLoading(false);
                setError(null);
            },
            (err) => {
                if (!mountedRef.current) return;
                setError(err);
                setLoading(false);
            }
        );
        return () => {
            mountedRef.current = false;
            off(r);
            if (typeof unsubscribe === 'function') unsubscribe();
        };
    }, [path]);

    // Manual refresh (one-time get)
    const refresh = useCallback(async () => {
        try {
            setLoading(true);
            const snap = await get(ref(db, path));
            if (!mountedRef.current) return;
            setData(normalize(snap.val()));
            setError(null);
        } catch (e) {
            if (mountedRef.current) setError(e);
        } finally {
            if (mountedRef.current) setLoading(false);
        }
    }, [path]);

    // mapByName untuk akses cepat
    const mapByName = data.reduce((acc, p) => {
        acc[p.name] = p;
        return acc;
    }, {});

    // summary sederhana
    const summary = (() => {
        const bySentiment = { positif: 0, negatif: 0, netral: 0 };
        let totalBerita = 0;
        data.forEach((p) => {
            totalBerita += p.total;
            if (bySentiment[p.sentiment] != null) {
                bySentiment[p.sentiment] += p.total;
            } else {
                bySentiment[p.sentiment] = p.total;
            }
        });
        return {
            totalProvinsi: data.length,
            totalBerita,
            bySentiment
        };
    })();

    return { data, mapByName, loading, error, refresh, summary };
}

/**
 * Hook ringan hanya untuk mengambil satu provinsi berdasarkan nama.
 * Menghindari re-render besar jika Anda hanya perlu satu item.
 */
export function useProvince(name, path = 'Provinces') {
    const { data, loading, error } = useProvincesRealtime(path);
    return {
        province: data.find((p) => p.name === name) || null,
        loading,
        error
    };
}