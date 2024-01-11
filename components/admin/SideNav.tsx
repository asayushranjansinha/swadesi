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
import { Icon } from "@iconify/react";

// Constants and Utilities
import { SIDE_NAVIGATION_ITEMS } from "@/constants";
import { useUserStore } from "@/hooks/userStore";
import { SideNavigation } from "@/lib/types";
import { cn } from "@/lib/utils";

function SideNav() {
  return (
    <aside className="hidden md:block md:w-60 min-h-full fixed border-r bg-secondary">
      {/* SideNav Header and logo */}
      <NavHeader />
      {/* main content */}
      <NavContainer />
    </aside>
  );
}

export default SideNav;

function NavHeader() {
  return (
    <Link
      href="/"
      className="flex flex-row space-x-3 items-center justify-center md:justify-normal md:px-6 md:py-2 border-b w-full"
    >
      <Image src={"/logo.png"} alt="Company Logo" width={40} height={40} />
      <span className="text-xl font-semibold hidden md:block">
        Swadesi Cart
      </span>
    </Link>
  );
}

function NavContainer() {
  const { user } = useUserStore();
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col w-full space-y-4 px-6"
    >
      {SIDE_NAVIGATION_ITEMS.map((item, index) => (
        <NavigationItem item={item} key={index} />
      ))}

      {/* Auth Links */}
      {!user && (
        <Link
          href="/signup"
          className={cn(
            "flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-background transition-colors duration-300"
          )}
        >
          <Icon icon="uil:signin" rotate={2} width="24" height="24" />
          <span className="font-semibold text-xl flex">SignUp</span>
        </Link>
      )}
    </Accordion>
  );
}

type NavigationItemProps = {
  item: SideNavigation;
};

function NavigationItem({ item }: NavigationItemProps) {
  const { user } = useUserStore();

  const pathname = usePathname();

  if (item?.userRole && item?.userRole !== user?.role) return null;
  switch (item.submenu) {
    case true:
      return (
        <AccordionItem
          value={item.title}
          className="my-2
        "
        >
          <AccordionTrigger
            className={cn(
              "p-2 rounded-lg hover:bg-background transition-colors duration-300",
              pathname.includes(item.path!) ? "bg-background/50" : ""
            )}
          >
            <div className="w-full flex space-x-4 items-center">
              {item.element}
              <span className="font-semibold text-xl">{item.title}</span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="ml-10 space-y-2 my-2 list-none">
            {item.subMenuItems?.map((subItem, index) => (
              <li key={index}>
                <Link
                  href={subItem.path!}
                  className={`${subItem.path === pathname ? "font-bold" : ""}`}
                >
                  <span>{subItem.title}</span>
                </Link>
              </li>
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    default:
      switch (item.type) {
        case "link":
          return (
            <Link
              href={item.path!}
              className={cn(
                "flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-background transition-colors duration-300",
                item.path === pathname ? "bg-background/50" : ""
              )}
            >
              {item.element}
              <span className="font-semibold text-xl flex">{item.title}</span>
            </Link>
          );
        default:
          return <>{item.element}</>;
      }
  }
}
