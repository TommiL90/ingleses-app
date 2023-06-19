import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addresses = [
  {
    street: "Rod. Armando Calil Bulos",
    number: "6145",
    description: null,
    locationUrl: "https://goo.gl/maps/7vjzMou2iZJevUCG8",
    latitude: -27.4374138,
    longitude: -48.400325,
    territoryId: 1
  },
  {
    street: "Servidão Nossa Sra. Aparecida",
    number: "44",
    description: null,
    locationUrl: "https://goo.gl/maps/EBpxNWicgLbb7S936",
    latitude: -27.436698,
    longitude: -48.4005732,
    territoryId: 1
  },
  {
    street: "Servidão Nossa Sra. Aparecida",
    number: "70",
    description: "Residencia dos ingleses",
    locationUrl: "https://goo.gl/maps/JeMDWi82Uc57o48i8",
    latitude: -27.4367172,
    longitude: -48.4010411,
    territoryId: 1
  },
  {
    street: "Servidão Nossa Sra. Aparecida",
    number: "187",
    description: null,
    locationUrl: "https://goo.gl/maps/9xS8eVVuNeig85A68",
    latitude: -27.4370422,
    longitude: -48.4022266,
    territoryId: 1
  },
  {
    street: "Servidão Nossa Sra. Aparecida",
    number: "188",
    description: null,
    locationUrl: "https://goo.gl/maps/msM6Wx9ezBKKA4H46",
    latitude: -27.4367725,
    longitude: -48.4022789,
    territoryId: 1
  },
  {
    street: "Servidão Nossa Sra. Aparecida",
    number: "201",
    description: null,
    locationUrl: "https://goo.gl/maps/CpHRve2NQwLfCiR86",
    latitude: -27.4370565,
    longitude: -48.4023388,
    territoryId: 1
  }
];

async function main() {
  // ... you will write your Prisma Client queries here
  for (const item of addresses) {
    const response = await prisma.address.create({
      data: {
        street: item.street,
        number: item.number,
        description: item.description,
        locationUrl: item.locationUrl,
        latitude: item.latitude,
        longitude: item.longitude,
        territoryId: item.territoryId
      }
    });
    console.log(response);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// npx ts-node script.ts

[
  {
    street: "Servidão Nossa Sra. Aparecida",
    number: "202",
    description: null,
    locationUrl: "https://goo.gl/maps/Vxp6YvH8Nmr7CL1o6",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Servidão Nossa Sra. Aparecida",
    number: "232",
    description: "Casa Rosa",
    locationUrl: "https://goo.gl/maps/QAMuM9rzBpMzMc9E7",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Servidão Nossa Sra. Aparecida",
    number: "321",
    description: null,
    locationUrl: "https://goo.gl/maps/c4x5nvCiBGrtDgeWA",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Servidão Ricardo Neves",
    number: "23",
    description: "No visitar (01/11/2018)",
    locationUrl: "https://goo.gl/maps/iD86NgXkcEACawjs6",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "NoPasar"
  },
  {
    street: "Servidão Ricardo Neves",
    number: "183",
    description: "Casa pintada de azul y amarillo",
    locationUrl: "https://goo.gl/maps/sstKAbkgefTCGaj67",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Rua Luiz Elias Daux",
    number: "396",
    description: "Heladeria en la esquina",
    locationUrl: "https://goo.gl/maps/PYyjdZEChQBFjdnh9",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Rod. Armando Calil Bulos",
    number: "5705",
    description: "Mecânica Tateno Pneus - Loja 1",
    locationUrl: "https://goo.gl/maps/qrQYjSTNPLgxPTrp9",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Rod. Armando Calil Bulos",
    number: "5531",
    description: "Sala 01",
    locationUrl: "https://goo.gl/maps/Zi26W3YTLp8fAUvK8",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Rod. Armando Calil Bulos",
    number: "5511",
    description: "N&M VIDROS",
    locationUrl: "https://goo.gl/maps/m8nEitiQusK1hjwW8",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Servidao Maria Luiza de Jesus",
    number: "47",
    description: "No visitar (01/11/2018)",
    locationUrl: "https://goo.gl/maps/cNNDtXnDgF7qt35V6",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "NoPasar"
  },
  {
    street: "Servidao Maria Luiza de Jesus",
    number: "78",
    description: "Ap 2",
    locationUrl: "https://goo.gl/maps/CCHZauJ4wei4nbRz9",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Rua Jose Nunes Vieira",
    number: "93",
    description: null,
    locationUrl: "https://goo.gl/maps/jmcGaEvsiJiEy1ks9",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Travessa Calendula",
    number: "66",
    description: null,
    locationUrl: "https://goo.gl/maps/uYQ72b3azG17wUXJA",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Serv. Botafogo dos Ingleses",
    number: "38",
    description: null,
    locationUrl: "https://goo.gl/maps/Ltth3SHTHkU42JUA8",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Serv. Botafogo dos Ingleses",
    number: "163",
    description: "confirmar en que departamento del condomio",
    locationUrl: "https://goo.gl/maps/ZkaonPVCYQSSu2589",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "PorConfirmar"
  },
  {
    street: "Av. Internacional",
    number: "303",
    description: "Ap 310",
    locationUrl: "https://goo.gl/maps/TrnJFVv1AHAXmvGM6",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  },
  {
    street: "Srv. Canalete",
    number: "163",
    description: "Ap 1",
    locationUrl: "https://goo.gl/maps/YPyeQv38GdTpDCyS7",
    latitude: -27.4357236,
    longitude: -48.4091321,
    territoryId: 1,
    status: "Confirmado"
  }
];
