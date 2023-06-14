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
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to
          &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>
          <Link href="/">Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
