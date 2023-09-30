"use client";
import React, { useState } from "react";
import {
  JourneyLocationContext,
} from "./LocationContext";
import { AddressCoordinatesType } from "@/Types/type";

const JourneyState = ({ children }: any) => {
  const [journeys, setJourneys] = useState<AddressCoordinatesType>({
    from: null,
    to: null,
  });
  return (
    <JourneyLocationContext.Provider value={{ journeys, setJourneys }}>
      {children}
    </JourneyLocationContext.Provider>
  );
};

export default JourneyState;
