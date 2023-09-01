import CardComponent from "@/components/Card";
import { maps } from "@/constants/maps";

export default async function Home() {
  return (
    <main className="container h-screen py-8">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
        {maps.map((territory) => (
          <CardComponent key={territory.id} territory={territory} />
        ))}
      </ul>
    </main>
  );
}
