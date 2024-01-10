"use client";
// React and Next.js
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Constants and Utilities
import { SIDE_NAVIGATION_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

// Custom Types
import { SideNavigation } from "@/lib/types";
import { ModeToggle } from "../ui/mode-toggle";

const SideNav = () => {
  return (
    <aside className="hidden md:flex md:w-60 h-screen flex-1 fixed border-r bg-secondary">
      <div className="flex flex-col space-y-6 w-full relative">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b w-full"
        >
          <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl hidden md:flex">Swadesi Cart</span>
        </Link>

        <div className="flex flex-col md:px-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {SIDE_NAVIGATION_ITEMS.map((item, idx) => (
              <NavigationItem idx={idx} item={item} />
            ))}
          </Accordion>
        </div>
        <div className="w-full absolute bottom-2 px-6">
          <ModeToggle />
        </div>
      </div>
    </aside>
  );
};

export default SideNav;

type NavigationItemProps = {
  item: SideNavigation;
  idx: any;
};
function NavigationItem({ item, idx }: NavigationItemProps) {
  const pathname = usePathname();
  switch (item.submenu) {
    case true:
      // Render submenu logic
      return (
        <AccordionItem value={item.title} key={idx}>
          <AccordionTrigger
            className={cn(
              "p-2 rounded-lg hover:bg-background transition-colors duration-300",
              item.path === pathname ? "bg-background" : ""
            )}
          >
            <div className="w-full flex space-x-4 items-center">
              {item.element}
              <span className="font-semibold text-xl">{item.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="w-full flex flex-col space-y-4 my-2 ml-12">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <li key={idx}>
                    <Link
                      href={subItem.path!}
                      className={`${
                        subItem.path === pathname ? "font-bold" : ""
                      }`}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      );
    case false:
      // Render regular item logic
      switch (item.type) {
        case "link":
          return (
            <Link
              key={idx}
              href={item.path!}
              className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-background ${
                item.path === pathname ? "bg-background" : ""
              }`}
            >
              {item.element}
              <span className="font-semibold text-xl flex">{item.title}</span>
            </Link>
          );
        case "popover":
          return (
            <Button
              key={idx}
              variant="ghost"
              size="lg"
              className={`w-full flex justify-start rounded-lg hover:bg-transparent pl-0`}
            >
              {item.element}
            </Button>
          );
        default:
          return null;
      }
    default:
      return null;
  }
}
