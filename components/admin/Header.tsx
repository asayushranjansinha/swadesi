"use client";

import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

import useScroll from "@/hooks/use-scroll";
import { useSelectedLayoutSegment } from "next/navigation";
import { ModeToggle } from "../ui/mode-toggle";
import Image from "next/image";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn("sticky inset-x-0 top-0 z-30 w-full transition-all", {
        "border-b backdrop-blur-lg opacity-80": scrolled,
        "border-b": selectedLayout,
      })}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={40}
          height={40}
          className="md:hidden"
        />

        <ModeToggle />

        <div className="hidden md:block">
          <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
            <span className="font-semibold text-sm">HQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
