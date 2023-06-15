"use client";
import { iTerritory } from "@/types/territory";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { SiOpenstreetmap } from "react-icons/si";
import Link from "next/link";

interface iCardComponentProps {
  territory: iTerritory;
}

export default function CardComponent({ territory }: iCardComponentProps) {
  return (
    <Card className="mt-6 w-full">
      <CardHeader color="blue-gray" className="relative flex h-56 items-center justify-center">
        <SiOpenstreetmap size={90} className="animate-pulse" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {territory.title}
        </Typography>
        <ul className="space-y-2">
          <li>
            <b> Barrio:</b> <span className="text-lg font-semibold">Ingleses</span>
          </li>
          <li>
            <b> Último censo completado:</b> 10/10/2022
          </li>
          <li>
            <b> Última predicación completada:</b> 10/10/2022
          </li>
          <li>
            <b> Contactos:</b> 30
          </li>
        </ul>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>
          <Link href={`/${territory.id}`}>Ir a territorio</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
