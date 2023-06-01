export interface iTerritory {
  id: number;
  title: string;
  center: {
    lat: number;
    lng: number;
  };
  poligono: number[][];
}
