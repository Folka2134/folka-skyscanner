import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

import { IoBed } from "react-icons/io5";
import { FaCarSide, FaPlane } from "react-icons/fa";
import RegionSettings from "./RegionSettings";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-3 bg-[#05203C] p-2 md:px-24 lg:px-52">
      <div className="flex items-center justify-between">
        <Image
          src="/images/Folka_Skyscanner_transparent.png"
          height={200}
          width={150}
          alt="logo"
        />
        <div className="flex flex-col items-center gap-5 text-white md:flex-row">
          <RegionSettings />
          <div className="flex items-center">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
      <div className="flex gap-2 font-semibold">
        <Button className="flex gap-1 rounded-full border-[1px] border-white bg-transparent hover:bg-[#154679] focus:border-opacity-0 focus:bg-[#0062E3]">
          <FaPlane />
          <span>Flights</span>
        </Button>
        <Button className="flex gap-1 rounded-full border-[1px] border-white bg-transparent hover:bg-[#154679] focus:border-opacity-0 focus:bg-[#0062E3]">
          <IoBed />
          <span>Hotels</span>
        </Button>
        <Button className="flex gap-1 rounded-full border-[1px] border-white bg-transparent hover:bg-[#154679] focus:border-opacity-0 focus:bg-[#0062E3]">
          <FaCarSide />
          <span>Car hire</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
