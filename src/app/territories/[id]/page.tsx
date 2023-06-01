import Table from "@/components/Table";
import { addressesExample } from "@/constants/addresses";
import { territories } from "@/constants/territories";
import { iTerritory } from "@/types/territory";
import dynamic from "next/dynamic";

interface IPageProps {
  params: { id: string };
}

export const revalidate = 180;

export async function generateStaticParams() {
  const territoriesData = territories;

  return territoriesData.map((territory: iTerritory) => ({
    id: territory.id.toString(),
    params: {
      _limit: 5,
      _page: 1
    }
  }));
}

const DynamicMap = dynamic(() => import("../../../components/Map"), {
  ssr: false,
  loading: () => <div>Loading Map...</div>
});

const TerritoryPage = ({ params }: IPageProps) => {
  const territory: iTerritory = territories.find((e) => e.id === Number(params.id))!;
  const Addresses = addressesExample;
  return (
    <>
      <main className="mx-auto h-screen max-w-screen-xl py-12">
        <h1 className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
          {territory.title}
        </h1>
        <div className="relative mb-12 flex h-[32rem] w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <DynamicMap
            key={territory.id}
            geolocation={territory.center}
            polygonCoors={territory.poligono}
            zoom={16}
            adresses={addressesExample}
          />
        </div>
        <h2 className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
          Direcciones
        </h2>
        <Table adresses={Addresses} />
      </main>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"></div>
      </div>
    </>
  );
};

export default TerritoryPage;
