import { useEffect, useState, useCallback, useRef } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
//import { useOfficialSocialMedia } from '../Hooks/SocialMediaOfficial';
import { db } from '../firebase';
// /src/Hooks/SocialMediaOfficial.jsx

/**
 * Hook untuk mengambil data dari Realtime Database path "/OfficialSocialMedia"
 * Return: { data, loading, error, refresh }
 * Data akan berupa array objek: [{ id, ...fields }]
 */
export function useOfficialSocialMedia(options = { once: false }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dbRef = useRef(null);
    const unsubRef = useRef(null);
    const { once } = options;

    const mapSnapshot = (snapshot) => {
        if (!snapshot.exists()) return [];
        const val = snapshot.val();
        return Object.entries(val).map(([id, item]) => ({
            id,
            ...item,
        }));
    };

    const fetchOnce = useCallback(async () => {
        try {
            setLoading(true);
            //const db = getDatabase();
            const r = ref(db, '/OfficialSocialMedia');
            const snap = await new Promise((resolve, reject) => {
                onValue(
                    r,
                    (s) => resolve(s),
                    (e) => reject(e),
                    { onlyOnce: true }
                );
            });
            setData(mapSnapshot(snap));
            setError(null);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, []);

    const startListening = useCallback(() => {
        setLoading(true);
        const db = getDatabase();
        dbRef.current = ref(db, '/OfficialSocialMedia');
        unsubRef.current = onValue(
            dbRef.current,
            (snapshot) => {
                setData(mapSnapshot(snapshot));
                setLoading(false);
                setError(null);
            },
            (err) => {
                setError(err);
                setLoading(false);
            }
        );
    }, []);

    const stopListening = useCallback(() => {
        if (dbRef.current) {
            off(dbRef.current);
        }
        unsubRef.current = null;
    }, []);

    const refresh = useCallback(() => {
        if (once) {
            fetchOnce();
        } else {
            stopListening();
            startListening();
        }
    }, [once, fetchOnce, startListening, stopListening]);

    useEffect(() => {
        if (once) {
            fetchOnce();
        } else {
            startListening();
        }
        return () => {
            stopListening();
        };
    }, [once, fetchOnce, startListening, stopListening]);

    return { data, loading, error, refresh };
}

/*
Contoh penggunaan di ManageInvoice.jsx:


function ManageInvoice() {
    const { data: socials, loading, error, refresh } = useOfficialSocialMedia();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <button onClick={refresh}>Refresh</button>
            {socials.map(item => (
                <div key={item.id}>
                    <strong>{item.platform}</strong> : {item.url}
                </div>
            ))}
        </div>
    );
}
*/