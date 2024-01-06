"use client";

import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

import useScroll from "@/hooks/use-scroll";
import { useSelectedLayoutSegment } from "next/navigation";
import { ModeToggle } from "../ui/mode-toggle";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        "sticky inset-x-0 top-0 z-30 w-full transition-all",
        {
          "border-b backdrop-blur-lg opacity-80": scrolled,
          "border-b": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl flex">Logo</span>
          </Link>
        </div>

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
