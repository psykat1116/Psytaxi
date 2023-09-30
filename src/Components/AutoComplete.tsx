"use client";
import React, { useState, useContext } from "react";
import {
  AddressCoordinatesType,
  JourneyContextType,
  AddressType,
  SuggestAddressType,
} from "@/Types/type";
import { JourneyLocationContext } from "@/Context/LocationContext";

const AutoComplete = () => {
  const { journeys, setJourneys } = useContext(
    JourneyLocationContext
  ) as JourneyContextType;
  const [journey, setJourney] = useState<AddressType>({
    from: "",
    to: "",
  });
  const [suggestAddress, setSuggestAddress] = useState<SuggestAddressType>({
    source: [],
    destination: [],
  });

  const [addressCoordinates, setAddressCoordinates] =
    useState<AddressCoordinatesType>({
      from: {
        latitude: 0,
        longitude: 0,
      },
      to: {
        latitude: 0,
        longitude: 0,
      },
    });

  const getAddress = async (position: string) => {
    try {
      if (journey.from !== "" || journey.to !== "") {
        const res = await fetch(`/api/search?q=${journey.from}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await res.json();
        if (!result.searchResults) return;
        console.log(result.searchResults.suggestions);
        setSuggestAddress({
          ...suggestAddress,
          [position]: result.searchResults.suggestions,
        });
        console.log(suggestAddress.destination);
      } else {
        setSuggestAddress({ ...suggestAddress, [position]: [] });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const delayDebounce = setTimeout(() => {
  //     getAddress();
  //   }, 1000);
  //   return () => clearTimeout(delayDebounce);
  // }, [journey]);

  const onSourceClick = async (item: any, add: string, addr: string) => {
    try {
      setJourney({
        ...journey,
        [add]: !item.full_address ? item.place_formatted : item.full_address,
      });
      setSuggestAddress({ ...suggestAddress, [addr]: [] });
      const res = await fetch(
        `https://api.mapbox.com/search/searchbox/v1/retrieve/${item.mapbox_id}?session_token=${process.env.UUID_NUMBER}&access_token=${process.env.MAPBOX_API_SESSION_TOKEN}`
      );
      const result = await res.json();
      if (!result.features) return;
      setAddressCoordinates({
        ...addressCoordinates,
        [add]: {
          latitude: result.features[0].geometry.coordinates[1],
          longitude: result.features[0].geometry.coordinates[0],
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative p-5 flex flex-col justify-start">
      <div className="relative flex flex-col justify-start">
        <label className="text-gray-400">Where From?</label>
        <input
          type="text"
          className="bg-white p-2 border-2 w-full rounded-md outline-none focus:border-orange-500"
          value={journey.from}
          onChange={(e) => {
            setJourney({ ...journey, from: e.target.value });
            setTimeout(() => {
              getAddress("source");
            }, 1000);
          }}
        />
        {suggestAddress.source && (
          <div className="shadow-sm p-1 rounded absolute w-full bg-white top-full">
            {suggestAddress.source.map((item: any, ind: number) => {
              return (
                (item.full_address || item.place_formatted) && (
                  <h2
                    key={item.full_address}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      onSourceClick(item, "from", "source");
                    }}
                  >
                    {!item.full_address
                      ? item.place_formatted
                      : item.full_address}
                  </h2>
                )
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-5">
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          className="bg-white p-2 border-2 w-full rounded-md outline-none focus:border-orange-500 text-black"
          value={journey.to}
          onChange={(e) => {
            setJourney({ ...journey, to: e.target.value });
            setTimeout(() => {
              getAddress("destination");
            }, 1000);
          }}
        />
        {suggestAddress.destination && (
          <div className="shadow-sm p-1 rounded absolute w-full bg-white top-full">
            {suggestAddress.destination.map((item: any, ind: number) => {
              return (
                (item.full_address || item.place_formatted) && (
                  <h2
                    key={item.full_address}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      onSourceClick(item, "to", "destination");
                    }}
                  >
                    {!item.full_address
                      ? item.place_formatted
                      : item.full_address}
                  </h2>
                )
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
