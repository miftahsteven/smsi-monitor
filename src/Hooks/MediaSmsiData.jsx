import { useState, useEffect, useCallback, useRef } from "react";
import { ref, onValue, get } from "firebase/database";
import { db } from "../firebase";

// /src/Hooks/MediaSmsiData.jsx
// Hook untuk mengambil data realtime dari path /MediaSmsiData
// Samakan struktur return dengan SmsiData.jsx (diasumsikan: { data, loading, error, refresh })

// Pastikan import db sesuai dengan file konfigurasi firebase Anda
// Contoh:
// import { db } from '../firebase';

// Jika di project Anda nama instance berbeda (misal: realtimeDb), sesuaikan manual.

const PATH = "/MediaSmsiData";

// Helper parse snapshot ke array ber-ID (jika SmsiData.jsx juga begitu)
function parseSnapshot(snapshot) {
  const val = snapshot.val();
  if (!val) return [];
  return Object.entries(val).map(([id, item]) => ({
    id,
    ...item,
  }));
}

export function useMediaSmsiData(options = {}) {
  const {
    sortBy = "createdAt", // bisa disesuaikan
    sortDirection = "desc", // 'asc' | 'desc'
    asArray = true, // jika SmsiData.jsx pakai array
  } = options;

  const [data, setData] = useState(asArray ? [] : null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  const applyData = useCallback(
    (snapshot) => {
      let result = asArray ? parseSnapshot(snapshot) : snapshot.val();

      if (asArray && sortBy) {
        result = result.sort((a, b) => {
          const av = a?.[sortBy];
          const bv = b?.[sortBy];
          if (av == null && bv == null) return 0;
          if (av == null) return 1;
          if (bv == null) return -1;
          if (av < bv) return sortDirection === "asc" ? -1 : 1;
          if (av > bv) return sortDirection === "asc" ? 1 : -1;
          return 0;
        });
      }

      if (mountedRef.current) {
        setData(result);
        setLoading(false);
        setError(null);
      }
    },
    [asArray, sortBy, sortDirection]
  );

  useEffect(() => {
    mountedRef.current = true;
    setLoading(true);
    setError(null);

    // Ganti db sesuai import Anda
    const dbRef = ref(db, PATH);

    const unsubscribe = onValue(
      dbRef,
      (snapshot) => applyData(snapshot),
      (err) => {
        if (mountedRef.current) {
          setError(err);
          setLoading(false);
        }
      }
    );

    return () => {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [applyData]);

  // Manual refresh (one-time fetch)
  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      const snap = await get(ref(db, PATH));
      applyData(snap);
    } catch (err) {
      if (mountedRef.current) {
        setError(err);
        setLoading(false);
      }
    }
  }, [applyData]);

  return { data, loading, error, refresh };
}

export default useMediaSmsiData;
