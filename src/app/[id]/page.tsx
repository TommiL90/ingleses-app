import Table from "@/components/Table";
// import { addressesExample } from "@/constants/addresses";
import { territories } from "@/constants/territories";
import { prisma } from "@/lib/prisma";
import { iTerritory } from "@/types/territory";
import dynamic from "next/dynamic";
import Link from "next/link";
import { TiArrowForward } from "react-icons/ti";

interface IPageProps {
  params: { id: string };
}

export const revalidate = 60 * 5;

const retrieveAddresses = async (id: number) => {
  try {
    const response = await prisma.address.findMany({
      where: { territoryId: id }
    });

    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch sectors");
  }
};

export async function generateStaticParams() {
  const territoriesData = territories;

  return territoriesData.map((territory: iTerritory) => ({
    id: territory.id.toString(),
    params: {
      _limit: 31,
      _page: 1
    }
  }));
}

const DynamicMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
  loading: () => <div>Loading Map...</div>
});

const TerritoryPage = async ({ params }: IPageProps) => {
  const territory: iTerritory = territories.find((e) => e.id === Number(params.id))!;
  const Adresseses = await retrieveAddresses(+params.id);
  return (
    <>
      <main className="mx-auto h-screen max-w-screen-xl py-12">
        <h1 className="container mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
          {territory.title}
        </h1>
        <div className="relative mb-8 flex h-[32rem] w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <DynamicMap
            key={territory.id}
            geolocation={territory.center}
            polygonCoors={territory.poligono}
            zoom={16}
            addresses={Adresseses}
          />
        </div>
        <div className="container">
          <div className="mb-6 flex justify-end font-sans font-semibold text-indigo-800 antialiased hover:text-indigo-900">
            <Link href={`/${territory.id}/map`} className="flex items-center justify-center gap-2">
              Ir a mapa pantalla completa <TiArrowForward size={20} />
            </Link>
          </div>
          <h2 className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
            Direcciones
          </h2>
          <Table addresses={Adresseses} />
        </div>
      </main>
    </>
  );
};

export default TerritoryPage;
