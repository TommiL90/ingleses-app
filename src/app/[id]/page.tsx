import { maps } from "@/constants/maps";
import { IGooglemaps } from "@/types/googlemaps";

interface IPageProps {
  params: { id: string };
}

export const revalidate = 60 * 60;

export async function generateStaticParams() {
  const territoriesData = maps;

  return territoriesData.map((territory: IGooglemaps) => ({
    id: territory.id.toString(),
    params: {
      _limit: 31,
      _page: 31
    }
  }));
}

const TerritoryPage = async ({ params }: IPageProps) => {
  const territory: IGooglemaps = maps.find((e) => e.id === Number(params.id))!;
  return (
    <>
      <main className="min-w-screen-xl min-h-screen">
        <iframe
          src={territory.url}
          style={{ border: "none", width: "100%", height: "100vh" }} // Opcional: para eliminar el borde del iframe
          allowFullScreen // Permite ver el contenido en pantalla completa
        ></iframe>
      </main>
    </>
  );
};

export default TerritoryPage;
