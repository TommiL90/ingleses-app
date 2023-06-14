"use client";

import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography
} from "@material-tailwind/react";
import { PlusIcon, HomeIcon, CogIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <div className="fixed right-[2rem] top-[2rem] z-[999]">
      <SpeedDial placement="bottom">
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full">
            <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <SpeedDialAction className="h-16 w-16">
            <HomeIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Inicio
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction className="h-16 w-16">
            <CogIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Configuraciones
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction className="h-16 w-16">
            <Square3Stack3DIcon className="h-5 w-5" />
            <Typography color="blue-gray" className="text-xs font-normal">
              Mapas
            </Typography>
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
