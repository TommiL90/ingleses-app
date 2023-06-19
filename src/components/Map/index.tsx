"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { iAddress } from "@/constants/addresses";
import AddressIcon from "../Pin";
import { Address } from "@prisma/client";
import Link from "next/link";

interface LatLangExpression {
  lat: number;
  lng: number;
}

interface ChangeViewProps {
  coords: LatLangExpression;
}

interface IMapProps {
  zoom: number;
  geolocation: LatLangExpression;
  polygonCoors: number[][];
  addresses?: Address[];
}

function ChangeView({ coords }: ChangeViewProps) {
  const map = useMap();
  map.setView([coords.lat, coords.lng], 17);
  return null;
}

export default function Map({ geolocation, polygonCoors, zoom, addresses }: IMapProps) {
  const geoData: LatLangExpression = geolocation; // ex. { lat: -27.425786, lng: -48.403245 }
  const center = { lat: geoData.lat, lng: geoData.lng };
  console.log(addresses);
  return (
    <MapContainer
      center={center}
      zoom={zoom ? zoom : 17}
      minZoom={zoom ? zoom : 17}
      // scrollWheelZoom={true}
      style={{ width: "100%", height: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <>
          {addresses &&
            addresses.map((address, index) => {
              const addressCoors: LatLangExpression = {
                lat: address.latitude,
                lng: address.longitude
              };
              return (
                <Marker
                  position={addressCoors}
                  icon={AddressIcon(index + 1)}
                  key={address.locationUrl}>
                  <Popup>
                    Ir a mapa de googleMaps <br />{" "}
                    <Link href={address.locationUrl}>Pincha aquí</Link>.
                  </Popup>
                </Marker>
              );
            })}
          <Polygon
            pathOptions={{ color: "purple" }}
            positions={polygonCoors.map(([lat, lng]) => [lat, lng])}>
            <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
          </Polygon>
        </>
      )}

      <ChangeView coords={center} />
    </MapContainer>
  );
}
