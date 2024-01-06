"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SIDENAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

const SideNav = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex md:w-60 h-screen flex-1 fixed border-r bg-secondary">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 h-12 w-full"
        >
          <span className="font-bold text-xl hidden md:flex">Logo</span>
        </Link>

        <div className="flex flex-col md:px-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {SIDENAV_ITEMS.map((item, idx) => {
              return !item.submenu ? (
                <Link
                  href={item.path}
                  className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-background ${
                    item.path === pathname ? "bg-background" : ""
                  }`}
                >
                  {item.icon}
                  <span className="font-semibold text-xl flex">
                    {item.title}
                  </span>
                </Link>
              ) : (
                <AccordionItem value={item.title} key={idx}>
                  <AccordionTrigger
                    className={cn(
                      "p-2 rounded-lg hover:bg-background transition-colors duration-300",
                      item.path === pathname ? "bg-background" : ""
                    )}
                  >
                    <div className="w-full flex space-x-4 items-center">
                      {item.icon}
                      <span className="font-semibold text-xl">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="w-full flex flex-col space-y-4 my-2 ml-12">
                      {item.subMenuItems?.map((subItem, idx) => {
                        return (
                          <li key={idx}>
                            <Link
                              href={subItem.path}
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
            })}
          </Accordion>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
