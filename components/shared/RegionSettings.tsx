"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { SlSpeech } from "react-icons/sl";
import { FaGlobe } from "react-icons/fa";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "../ui/button";

const RegionSettings = () => {
  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("United Kingdom");
  const [currency, setCurrency] = useState("GBP - £");

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex gap-2 rounded-md bg-[#154679] px-4 py-2 text-xs">
          <span>{language}</span>
          <span>{country}</span>
          <span>{currency}</span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-96">
        <DialogHeader className="mb-5 font-semibold">
          Regional Settings
        </DialogHeader>
        <div>
          <div className="flex items-center gap-1">
            <SlSpeech size={20} />
            <span className="text-xs font-semibold">Language</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="mt-1 flex w-80 items-center justify-between rounded-md border-[1px] border-gray-300 px-2 py-1 text-left">
              <span>{language}</span>
              <IoMdArrowDropdown size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 border-[1px] border-gray-300">
              <DropdownMenuLabel>Popular languages</DropdownMenuLabel>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-gray-300"
                onClick={() => setLanguage("English")}
              >
                English
              </DropdownMenuItem>

              <DropdownMenuLabel>All languages</DropdownMenuLabel>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-gray-300"
                onClick={() => setLanguage("Other")}
              >
                Other
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <FaGlobe size={20} />
            <span className="text-xs font-semibold">Country / Region</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="mt-1 flex w-80 items-center justify-between rounded-md border-[1px] border-gray-300 px-2 py-1 text-left">
              <span>{country}</span>
              <IoMdArrowDropdown size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 border-[1px] border-gray-300">
              <DropdownMenuItem
                className="cursor-pointer hover:bg-gray-300"
                onClick={() => setCountry("United Kingdom")}
              >
                United Kingdom
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <HiOutlineCircleStack size={20} />
            <span className="text-xs font-semibold">Currency</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="mt-1 flex w-80 items-center justify-between rounded-md border-[1px] border-gray-300 px-2 py-1 text-left">
              <span>{currency}</span>
              <IoMdArrowDropdown size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 border-[1px] border-gray-300">
              <DropdownMenuLabel>Popular currencies</DropdownMenuLabel>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-gray-300"
                onClick={() => setCurrency("GBP - £")}
              >
                GBP - £
              </DropdownMenuItem>

              <DropdownMenuLabel>All currencies</DropdownMenuLabel>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-gray-300"
                onClick={() => setCurrency("Other")}
              >
                Other
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* <div className="flex flex-col gap-1">
          <Button className="text-md bg-[#05203C] font-bold hover:bg-[#154679]">
            Apply
          </Button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
};

export default RegionSettings;
