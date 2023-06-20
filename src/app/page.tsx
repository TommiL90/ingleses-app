import CardComponent from "@/components/Card";
import { territories } from "@/constants/territories";

export default async function Home() {
  const res = await fetch(`${process.env.BASE_URL}/api/hello`);
  console.log(await res.json());
  return (
    <main className="container h-screen py-8">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
        {territories.map((territory) => (
          <CardComponent key={territory.id} territory={territory} />
        ))}
      </ul>
    </main>
  );
}
