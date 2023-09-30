"use client";
import React, { useState, useEffect } from "react";
import LocationContext from "./LocationContext";
import { Location, LocationContextType } from "@/Types/type";

const LocationState = ({ children }: any) => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);
  return (
    <LocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationState;
