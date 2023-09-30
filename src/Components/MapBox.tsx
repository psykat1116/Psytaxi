"use client";
import React, { useContext, useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import LocationContext, {
  JourneyLocationContext,
} from "@/Context/LocationContext";
import Markers from "./Markers";
import { LocationContextType, JourneyContextType } from "@/Types/type";

function MapBox() {
  const { userLocation, setUserLocation } = useContext(
    LocationContext
  ) as LocationContextType;
  const { journeys, setJourneys } = useContext(
    JourneyLocationContext
  ) as JourneyContextType;
  const PointRef = useRef(null);
  useEffect(() => {
    if (journeys.from) {
      const map = PointRef.current as mapboxgl.Map | null;
      if (map) {
        map.flyTo({
          center: [journeys.from.longitude, journeys.from.latitude],
          zoom: 14,
          duration: 2000,
        });
      }
    }
  }, [journeys.from]);

  useEffect(() => {
    if (journeys.to) {
      const map = PointRef.current as mapboxgl.Map | null;
      if (map) {
        map.flyTo({
          center: [journeys.to.longitude, journeys.to.latitude],
          zoom: 14,
          duration: 2000,
        });
      }
    }
  }, [journeys.to]);

  return (
    <div>
      <h2 className="text-[20px] font-semibold">Map</h2>
      <div className="rounded-lg overflow-hidden mt-4">
        {userLocation && (
          <Map
            ref={PointRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation?.longitude,
              latitude: userLocation?.latitude,
              zoom: 14,
            }}
            style={{ width: "100%", height: 450, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker
              longitude={userLocation?.longitude}
              latitude={userLocation?.latitude}
              anchor="bottom"
            >
              <Image
                src="/pin.png"
                alt="pin"
                width={30}
                height={30}
                className="object-contain"
              />
            </Marker>
            <Markers />
          </Map>
        )}
      </div>
    </div>
  );
}

export default MapBox;
