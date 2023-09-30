export type Location = {
  latitude: number;
  longitude: number;
};

export type JourneyType = {
  from: Location | null;
  to: Location | null;
};

export type LocationContextType = {
  userLocation: Location | null;
  setUserLocation: (location: Location) => void;
};

export type JourneyContextType = {
  journeys: JourneyType;
  setJourneys: (journeys: JourneyType) => void;
};

export type AddressType = {
  from: string;
  to: string;
};

export type AddressCoordinatesType = {
  from: {
    latitude: number;
    longitude: number;
  } | null;
  to: {
    latitude: number;
    longitude: number;
  } | null;
};

export type SuggestAddressType = {
  source: any[];
  destination: any[];
};
