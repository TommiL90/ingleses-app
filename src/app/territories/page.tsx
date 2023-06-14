import CardComponent from "@/components/Card";
import { territories } from "@/constants/territories";

const TerritoriesPage = () => {
  return (
    <main className="container mx-auto py-8">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
        {territories.map((territory) => (
          <CardComponent key={territory.id} territory={territory} />
        ))}
      </ul>
    </main>
  );
};

export default TerritoriesPage;
