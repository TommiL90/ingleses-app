import { territories } from "@/constants/territories";
import { iTerritory } from "@/types/territory";
import dynamic from "next/dynamic";

interface IPageProps {
  params: { id: string };
}

const DynamicMap = dynamic(() => import("../../../components/Map"), {
  ssr: false,
  loading: () => <div>Loading Map...</div>
});

const mapPage = ({ params }: IPageProps) => {
  const territory: iTerritory = territories.find((e) => e.id === Number(params.id))!;
  return (
    <main className="h-screen w-screen py-8">
      <DynamicMap
        key={territory.id}
        geolocation={territory.center}
        polygonCoors={territory.poligono}
        zoom={16}
      />
    </main>
  );
};

export default mapPage;
