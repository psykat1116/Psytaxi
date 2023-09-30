import { createContext } from "react";
import { LocationContextType, JourneyContextType } from "@/Types/type";

const LocationContext = createContext<LocationContextType | null>(null);
export const JourneyLocationContext = createContext<JourneyContextType | null>(
  null
);

export default LocationContext;
