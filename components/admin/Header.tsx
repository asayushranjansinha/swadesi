"use client";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/use-scroll";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        "sticky inset-x-0 top-0 z-30 w-full transition-all bg-background p-2",
        {
          "border-b ": scrolled,
          "border-b": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={40}
          height={40}
          className="md:hidden"
        />
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
