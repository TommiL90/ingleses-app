interface Location {
  lat: number;
  lng: number;
}

export interface iAddress {
  address: string;
  number: string;
  complement?: string;
  description: string;
  location: Location;
  mapLink: string;
  status: string;
}

export const addressesExample: iAddress[] = [
  {
    address: "Calle  1",
    number: "123",
    complement: "Apt 1",
    description: "Descripcíon de dirección",
    location: {
      lat: -27.436704,
      lng: -48.407284
    },
    mapLink: "https://goo.gl/maps/1dfJssvW3F19qeXm9",
    status: "Activo"
  },
  {
    address: "Calle  2",
    number: "123",
    complement: "Apt 1",
    description: "Descripcíon de dirección",
    location: {
      lat: -27.435389,
      lng: -48.410093
    },
    mapLink: "https://goo.gl/maps/eBNcJxKCr8M8oWKEA",
    status: "Por confirmar"
  },
  {
    address: "Calle  3",
    number: "123",
    complement: "Apt 1",
    description: "Descripcíon de dirección",
    location: {
      lat: -27.436337,
      lng: -48.40068
    },
    mapLink: "https://goo.gl/maps/NzbircmVx2awpqHf7",
    status: "Por confirmar"
  },
  {
    address: "Calle  4",
    number: "123",
    complement: "Apt 1",
    description: "Descripcíon de dirección",
    location: {
      lat: -27.437755,
      lng: -48.410957
    },
    mapLink: "https://goo.gl/maps/yJBREThoiGFMSQht9",
    status: "Activo"
  }
];
