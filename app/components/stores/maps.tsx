"use client";

import Map, { Marker } from "react-map-gl/maplibre";
import { MapPin } from "lucide-react";
interface storeMapProps{
    locationTitle : 'motors' | 'stores' | 'contact'
}
export default function StoreMap({locationTitle} : storeMapProps) {
    const longitude = locationTitle === 'motors' ? 31.3604841 : locationTitle === 'stores' ? 31.3115895 : 31.3063121
    const latitude = locationTitle === 'motors' ? 30.0412509 : locationTitle === 'stores' ? 30.0946452 : 30.0919396
  return (
    <Map
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 14,
      }}
      mapStyle="https://tiles.openfreemap.org/styles/dark"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Marker longitude={longitude} latitude={latitude}>
        <MapPin
          size={42}
          className="text-red-900 drop-shadow-[0_0_12px_#ffffff]"
        />
      </Marker>
    </Map>
  );
}