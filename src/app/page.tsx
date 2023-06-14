import dynamic from "next/dynamic";
// eslint-disable-next-line spaced-comment
//-27.442286, -48.395711
const territorio = {
  id: 1,
  title: "Territorio 5",
  center: { lat: -27.442286, lng: -48.395711 },
  poligono: [
    [-27.439311, -48.39704],
    [-27.439129, -48.394411],
    [-27.438381, -48.392846],
    [-27.445762, -48.393557],
    [-27.445709, -48.398231],
    [-27.445286, -48.398211],
    [-27.443539, -48.397846],
    [-27.442295, -48.397473],
    [-27.441434, -48.397086],
    [-27.440428, -48.396975]
  ]
};

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <div>Loading Map...</div>
});

export default function Home() {
  return (
    <main className="container h-screen">
      <DynamicMap geolocation={territorio.center} polygonCoors={territorio.poligono} zoom={12} />
    </main>
  );
}
