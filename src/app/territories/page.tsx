import CardComponent from "@/components/Card";
import { territories } from "@/constants/territories";

const TerritoriesPage = () => {
  return (
    <main className="container mx-auto">
      <ul className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
        {territories.map((territory) => (
          <CardComponent key={territory.id} territory={territory} />
        ))}
      </ul>
    </main>
  );
};

export default TerritoriesPage;
