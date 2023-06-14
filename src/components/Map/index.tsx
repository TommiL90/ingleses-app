"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { iAddress } from "@/constants/addresses";
import AddressIcon from "../Pin";

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
  adresses?: iAddress[];
}

function ChangeView({ coords }: ChangeViewProps) {
  const map = useMap();
  map.setView([coords.lat, coords.lng], 17);
  return null;
}

export default function Map({ geolocation, polygonCoors, zoom, adresses }: IMapProps) {
  const geoData: LatLangExpression = geolocation; // ex. { lat: -27.425786, lng: -48.403245 }
  const center = { lat: geoData.lat, lng: geoData.lng };

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
          {adresses &&
            adresses.map((address, index) => {
              const addressCoors: LatLangExpression = {
                lat: address.location.lat,
                lng: address.location.lng
              };
              return (
                <Marker position={addressCoors} icon={AddressIcon(index + 1)} key={address.mapLink}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
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
