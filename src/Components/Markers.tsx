import React, { useContext } from "react";
import { Map, Marker } from "react-map-gl";
import Image from "next/image";
import LocationContext, {
  JourneyLocationContext,
} from "@/Context/LocationContext";
import { LocationContextType, JourneyContextType } from "@/Types/type";

const Markers = () => {
  const { userLocation, setUserLocation } = useContext(
    LocationContext
  ) as LocationContextType;
  const { journeys, setJourneys } = useContext(
    JourneyLocationContext
  ) as JourneyContextType;
  return (
    <div>
      <Marker
        longitude={userLocation?.longitude as number}
        latitude={userLocation?.latitude as number}
        anchor="bottom"
      >
        <Image
          src="/pin.png"
          className="object-contain"
          alt="pin"
          width={30}
          height={30}
        />
      </Marker>
      {journeys.from!==null && (
        <Marker
          longitude={journeys?.from?.longitude as number}
          latitude={journeys?.from?.latitude as number}
          anchor="bottom"
        >
          <Image
            src="/location.png"
            className="object-contain"
            alt="location"
            width={30}
            height={30}
          />
        </Marker>
      )}
      {journeys.to!==null && (
        <Marker
          longitude={journeys?.to?.longitude as number}
          latitude={journeys?.to?.latitude as number}
          anchor="bottom"
        >
          <Image
            src="/location.png"
            className="object-contain"
            alt="location"
            width={30}
            height={30}
          />
        </Marker>
      )}
    </div>
  );
};

export default Markers;
