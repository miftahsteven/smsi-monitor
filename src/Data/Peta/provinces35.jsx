export const provinces35 = [
    // --- SUMATRA
    { name: 'Aceh', lat: 5.55, lng: 95.32, sentiment: 'netral', total: 12 },
    { name: 'Sumatera Utara', lat: 3.58, lng: 98.65, sentiment: 'negatif', total: 28 },
    { name: 'Sumatera Barat', lat: -0.95, lng: 100.35, sentiment: 'positif', total: 10 },
    { name: 'Riau', lat: 0.53, lng: 101.45, sentiment: 'netral', total: 14 },
    { name: 'Kepulauan Riau', lat: 1.08, lng: 103.92, sentiment: 'positif', total: 7 },
    { name: 'Jambi', lat: -1.61, lng: 103.61, sentiment: 'negatif', total: 9 },
    { name: 'Bengkulu', lat: -3.80, lng: 102.26, sentiment: 'netral', total: 6 },
    { name: 'Sumatera Selatan', lat: -2.99, lng: 104.76, sentiment: 'positif', total: 18 },
    { name: 'Kepulauan Bangka Belitung', lat: -2.13, lng: 106.10, sentiment: 'netral', total: 5 },
    { name: 'Lampung', lat: -5.43, lng: 105.26, sentiment: 'negatif', total: 11 },

    // --- JAWA
    { name: 'Banten', lat: -6.12, lng: 106.15, sentiment: 'netral', total: 8 },
    { name: 'DKI Jakarta', lat: -6.21, lng: 106.85, sentiment: 'positif', total: 30 },
    { name: 'Jawa Barat', lat: -6.90, lng: 107.61, sentiment: 'netral', total: 22 },
    { name: 'Jawa Tengah', lat: -7.00, lng: 110.42, sentiment: 'positif', total: 17 },
    { name: 'DI Yogyakarta', lat: -7.80, lng: 110.36, sentiment: 'netral', total: 9 },
    { name: 'Jawa Timur', lat: -7.26, lng: 112.75, sentiment: 'negatif', total: 26 },

    // --- BALI, NUSRA
    { name: 'Bali', lat: -8.65, lng: 115.22, sentiment: 'positif', total: 12 },
    { name: 'Nusa Tenggara Barat', lat: -8.58, lng: 116.10, sentiment: 'netral', total: 7 },
    { name: 'Nusa Tenggara Timur', lat: -10.18, lng: 123.60, sentiment: 'netral', total: 6 },

    // --- KALIMANTAN
    { name: 'Kalimantan Barat', lat: -0.02, lng: 109.34, sentiment: 'negatif', total: 8 },
    { name: 'Kalimantan Tengah', lat: -2.21, lng: 113.92, sentiment: 'netral', total: 5 },
    { name: 'Kalimantan Selatan', lat: -3.32, lng: 114.59, sentiment: 'positif', total: 9 },
    { name: 'Kalimantan Timur', lat: -0.50, lng: 117.15, sentiment: 'netral', total: 10 },
    { name: 'Kalimantan Utara', lat: 3.30, lng: 117.62, sentiment: 'netral', total: 3 },

    // --- SULAWESI
    { name: 'Sulawesi Utara', lat: 1.49, lng: 124.84, sentiment: 'positif', total: 6 },
    { name: 'Gorontalo', lat: 0.54, lng: 123.06, sentiment: 'netral', total: 4 },
    { name: 'Sulawesi Tengah', lat: -0.90, lng: 119.87, sentiment: 'negatif', total: 7 },
    { name: 'Sulawesi Barat', lat: -2.67, lng: 118.90, sentiment: 'netral', total: 3 },
    { name: 'Sulawesi Selatan', lat: -5.15, lng: 119.41, sentiment: 'positif', total: 15 },
    { name: 'Sulawesi Tenggara', lat: -4.01, lng: 122.52, sentiment: 'netral', total: 5 },

    // --- MALUKU & PAPUA (pra-pemekaran; total target 35)
    { name: 'Maluku', lat: -3.70, lng: 128.17, sentiment: 'netral', total: 4 },
    { name: 'Maluku Utara', lat: 0.79, lng: 127.38, sentiment: 'netral', total: 3 },
    { name: 'Papua', lat: -2.59, lng: 140.67, sentiment: 'negatif', total: 6 },
    { name: 'Papua Barat', lat: -0.86, lng: 134.06, sentiment: 'netral', total: 3 },

    // --- Tambahan agar genap 35 (pakai salah satu provinsi hasil pemekaran)
    // Jika kamu pakai skema 34 provinsi klasik, kamu bisa set salah satu sebagai "Papua Pegunungan"
    // atau ganti sesuai kebutuhan data internal (yang penting jumlah item = 35).
    { name: 'Papua Pegunungan', lat: -4.08, lng: 138.95, sentiment: 'netral', total: 2 },
];

export const provincesOther = [
    // --- SUMATRA
    { name: 'Aceh', lat: 5.55, lng: 95.32, positive: 2, neutral: 1, negative: 0, sentiment: 'positif', total: 3 },
    { name: 'Sumatera Utara', lat: 3.58, lng: 98.65, positive: 0, neutral: 1, negative: 1, sentiment: 'negatif', total: 2 },
    { name: 'Sumatera Barat', lat: -0.95, lng: 100.35, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Riau', lat: 0.53, lng: 101.45, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Kepulauan Riau', lat: 1.08, lng: 103.92, positive: 1, neutral: 0, negative: 1, sentiment: 'positif', total: 2 },
    { name: 'Jambi', lat: -1.61, lng: 103.61, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Bengkulu', lat: -3.80, lng: 102.26, positive: 1, neutral: 1, negative: 0, sentiment: 'netral', total: 2 },
    { name: 'Sumatera Selatan', lat: -2.99, lng: 104.76, positive: 1, neutral: 0, negative: 0, sentiment: 'positif', total: 1 },
    { name: 'Kepulauan Bangka Belitung', lat: -2.13, lng: 106.10, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Lampung', lat: -5.43, lng: 105.26, positive: 1, neutral: 0, negative: 1, sentiment: 'negatif', total: 2 },

    // --- JAWA
    { name: 'Banten', lat: -6.12, lng: 106.15, positive: 1, neutral: 0, negative: 0, sentiment: 'positif', total: 1 },
    { name: 'DKI Jakarta', lat: -6.21, lng: 106.85, positive: 3, neutral: 0, negative: 1, sentiment: 'positif', total: 4 },
    { name: 'Jawa Barat', lat: -6.90, lng: 107.61, positive: 1, neutral: 0, negative: 0, sentiment: 'positif', total: 1 },
    { name: 'Jawa Tengah', lat: -7.00, lng: 110.42, positive: 2, neutral: 0, negative: 1, sentiment: 'positif', total: 3 },
    { name: 'DI Yogyakarta', lat: -7.80, lng: 110.36, positive: 1, neutral: 0, negative: 0, sentiment: 'positif', total: 1 },
    { name: 'Jawa Timur', lat: -7.26, lng: 112.75, positive: 1, neutral: 0, negative: 2, sentiment: 'negatif', total: 3 },

    // --- BALI, NUSRA
    { name: 'Bali', lat: -8.65, lng: 115.22, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Nusa Tenggara Barat', lat: -8.58, lng: 116.10, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Nusa Tenggara Timur', lat: -10.18, lng: 123.60, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },

    // --- KALIMANTAN
    { name: 'Kalimantan Barat', lat: -0.02, lng: 109.34, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Kalimantan Tengah', lat: -2.21, lng: 113.92, positive: 1, neutral: 0, negative: 0, sentiment: 'positif', total: 0 },
    { name: 'Kalimantan Selatan', lat: -3.32, lng: 114.59, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Kalimantan Timur', lat: -0.50, lng: 117.15, positive: 1, neutral: 0, negative: 0, sentiment: 'positif', total: 1 },
    { name: 'Kalimantan Utara', lat: 3.30, lng: 117.62, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },

    // --- SULAWESI
    { name: 'Sulawesi Utara', lat: 1.49, lng: 124.84, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Gorontalo', lat: 0.54, lng: 123.06, positive: 1, neutral: 0, negative: 0, sentiment: 'positif', total: 1 },
    { name: 'Sulawesi Tengah', lat: -0.90, lng: 119.87, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Sulawesi Barat', lat: -2.67, lng: 118.90, positive: 1, neutral: 0, negative: 0, sentiment: 'positif', total: 1 },
    { name: 'Sulawesi Selatan', lat: -5.15, lng: 119.41, positive: 1, neutral: 0, negative: 0, sentiment: 'positif', total: 1 },
    { name: 'Sulawesi Tenggara', lat: -4.01, lng: 122.52, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },

    // --- MALUKU & PAPUA
    { name: 'Maluku', lat: -3.70, lng: 128.17, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Maluku Utara', lat: 0.79, lng: 127.38, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Papua', lat: -2.59, lng: 140.67, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
    { name: 'Papua Barat', lat: -0.86, lng: 134.06, positive: 1, neutral: 0, negative: 0, sentiment: 'positif', total: 1 },

    // --- DOB PAPUA (contoh tambahan agar total 35)
    { name: 'Papua Pegunungan', lat: -4.08, lng: 138.95, positive: 0, neutral: 0, negative: 0, sentiment: 'netral', total: 0 },
];
