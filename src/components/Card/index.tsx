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
import dynamic from "next/dynamic";
import Link from "next/link";

interface iCardComponentProps {
  territory: iTerritory;
}

const DynamicMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div role="status" className="h-48 w-full animate-pulse space-y-8 bg-primary">
      <div className="flex h-48 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:w-96">
        <svg
          className="h-12 w-12 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512">
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
});

export default function CardComponent({ territory }: iCardComponentProps) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <DynamicMap
          key={territory.id}
          geolocation={territory.center}
          polygonCoors={territory.poligono}
          zoom={18}
        />
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
