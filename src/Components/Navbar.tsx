import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] shadow-sm px-5 py-3">
      <Image
        src="/PsytaxiLogo.png"
        alt="logo"
        height={60}
        width={120}
        className="object-contain"
      />
      <div className="md:flex hidden gap-6 font-bold text-lg">
        <h2 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">Home</h2>
        <h2 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">History</h2>
        <h2 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">Contact</h2>
        <h2 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">Help</h2>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
