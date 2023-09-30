"use client"
import Image from "next/image";
import Booking from "@/Components/Booking";
import MapBox from "@/Components/MapBox";
import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <main className="grid md:grid-cols-3 grid-cols-1 min-h-screen w-full">
      <div className="p-5">
        <Booking />
      </div>
      <div className="col-span-2 p-5">
        <MapBox />
      </div>
    </main>
  );
}
