import React from "react";
import AutoComplete from "./AutoComplete";
import Cars from "./Cars";
import Payment from "./Payment";

const Booking = () => {
  return (
    <>
      <h2 className="text-[24px] font-semibold mb-3">Booking</h2>
      <div className="border-[1px] rounded-md py-3 px-2">
        <AutoComplete />
        <Cars />
        <Payment />
        <button className="w-full bg-yellow-400 p-1 rounded-md mt-4">
          Book
        </button>
      </div>
    </>
  );
};

export default Booking;
