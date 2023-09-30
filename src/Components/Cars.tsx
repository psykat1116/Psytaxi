"use client";
import React, { useState } from "react";
import { CarsList, Car } from "@/data/Cars";
import Image from "next/image";

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState<string>(CarsList[0].name);
  return (
    <div className="my-5 p-5">
      <h2 className="font-semibold">Selcet Car</h2>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mt-5 gap-5">
        {CarsList.map((car: Car) => {
          return (
            <div
              key={car.id}
              className={`min-h-full flex flex-col justify-between items-center border-2 p-2 rounded-md hover:border-yellow-400 cursor-pointer ${
                selectedCar === car.name && "border-yellow-400"
              } `}
              onClick={() => setSelectedCar(car.name)}
            >
              <Image
                src={car.image}
                alt={car.name}
                width={120}
                height={120}
                className="object-contain"
              />
              <div className="flex justify-between items-center text-[12px] w-full mt-2">
                <h2>{car.name}</h2>
                <span>{car.charges * 8}$</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
