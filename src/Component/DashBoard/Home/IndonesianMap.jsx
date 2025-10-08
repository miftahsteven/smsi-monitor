import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import L, { marker } from "leaflet";
import { useEffect, useMemo } from "react";
import { provincesOther } from "../../../Data/Peta/provinces35";
import {
  useMapIndonesia,
  useProvincesRealtime,
} from "../../../Hooks/Provinces";

// Batas Indonesia (kira-kira): [lat, lng]
const INDONESIA_BOUNDS = L.latLngBounds(
  L.latLng(-11.2, 95.0), // Barat-Daya (Aceh selatan – Sabang lebih utara, tapi aman)
  L.latLng(6.2, 141.5) // Timur-Laut (Papua ujung timur & atas Sulut)
);

const getColor = (sentiment) => {
  switch (sentiment) {
    case "negatif":
      return "#e11d48"; // merah
    case "positif":
      return "#2563eb"; // biru
    default:
      return "#6b7280"; // abu-abu (netral/unknown)
  }
};

const Legend = () => (
  <div className="leaflet-bottom leaflet-left" style={{ padding: "8px" }}>
    <div
      style={{
        background: "white",
        padding: "8px 10px",
        borderRadius: 6,
        boxShadow: "0 2px 8px rgba(0,0,0,.15)",
        fontSize: 12,
        lineHeight: 1.4,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Sentimen Berita</div>
      <div>
        <span
          style={{
            display: "inline-block",
            width: 10,
            height: 10,
            background: "#e11d48",
            marginRight: 6,
          }}
        ></span>
        Negatif
      </div>
      <div>
        <span
          style={{
            display: "inline-block",
            width: 10,
            height: 10,
            background: "#2563eb",
            marginRight: 6,
          }}
        ></span>
        Positif
      </div>
      <div>
        <span
          style={{
            display: "inline-block",
            width: 10,
            height: 10,
            background: "#6b7280",
            marginRight: 6,
          }}
        ></span>
        Netral
      </div>
    </div>
  </div>
);

export default function IndonesiaMap({ dataFilterAPI }) {
  //const { data: realtimeProv, loading } = useProvincesRealtime();
  // let { data: markers, loading } = useProvincesRealtime();
  const { data: markers, loading, refresh } = useMapIndonesia();

  let markerData = markers?.data || [];
  // markerData.map((item, index) => {
  //   return console.log(item);
  // });

  const data = dataFilterAPI;

  if (data && data.data?.local_top_news) {
    markerData = data.data.local_top_news;
  }

  useEffect(() => {
    if (!markers) {
      refresh();
    }
  }, [markers, refresh]);

  // const markers = useMemo(() => {
  //     if (loading && realtimeProv.length === 0) {
  //         return provincesOther
  //             .filter(p => typeof p.lat === 'number' && typeof p.lng === 'number')
  //             .map(p => ({
  //                 ...p,
  //                 positive: p.positive ?? 0,
  //                 neutral: p.neutral ?? 0,
  //                 negative: p.negative ?? 0,
  //                 total: p.total ?? 0,
  //                 sentiment: p.sentiment || 'netral'
  //             }));
  //     }
  //     return realtimeProv;
  // }, [loading, realtimeProv]);

  return (
    <div
      style={{
        height: 520,
        width: "100%",
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
      }}
      className="my-3"
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            zIndex: 1000,
            top: 8,
            left: 8,
            background: "rgba(255,255,255,0.9)",
            padding: "4px 10px",
            borderRadius: 6,
            fontSize: 12,
          }}
        >
          Memuat data provinsi...
        </div>
      )}
      <MapContainer
        bounds={INDONESIA_BOUNDS}
        maxBounds={INDONESIA_BOUNDS}
        maxBoundsViscosity={1.0}
        zoom={5}
        minZoom={4}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom
        worldCopyJump={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {markerData.map((p) => (
          <CircleMarker
            key={p.nama}
            center={[p.koordinat_ibukota[0], p.koordinat_ibukota[1]]}
            radius={Math.min(6 + Math.log1p(p.total || 1) * 3, 30)}
            pathOptions={{
              color: getColor(p.kesimpulan),
              fillColor: getColor(p.kesimpulan),
              fillOpacity: 0.8,
              weight: 1,
            }}
          >
            <Tooltip direction="top" offset={[0, -6]} opacity={1}>
              <div style={{ minWidth: 180 }}>
                <div style={{ fontWeight: 700 }}>{p.nama}</div>
                <div>Positif: {p.sentimen_breakdown.positive}</div>
                <div>Netral: {p.sentimen_breakdown.neutral}</div>
                <div>Negatif: {p.sentimen_breakdown.negative}</div>
                <div>Total: {p.total}</div>
              </div>
            </Tooltip>
          </CircleMarker>
        ))}
        <Legend />
      </MapContainer>
    </div>
  );
}
