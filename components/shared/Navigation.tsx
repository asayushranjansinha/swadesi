"use client";

import { cn } from "@/lib/utils";
import { useUserStore } from "@/hooks/userStore";
import { usePathname } from "next/navigation";

// Components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import IconWrapper from "./IconWrapper";

// Styles
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

// Next.js
import Link from "next/link";

// Constants
import { NavigationRoutes } from "@/constants";
import { Navigation } from "@/lib/types";

function Navigation() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {NavigationRoutes.map((route) => (
          <NavigationItem key={route.id} item={route} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;

interface NavigationItemProps {
  item: Navigation;
}
function NavigationItem({ item }: NavigationItemProps) {
  const { user } = useUserStore();
  const pathname = usePathname();

  if (item.access && item.access !== user?.role) return null;
  switch (item.submenu) {
    case true:
      return (
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(pathname.includes(item.path!) && "bg-accent")}
          >
            {item.heading!}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-48 min-w-fit h-full p-4">
              {item.submenuItems?.map((subItem) => (
                <li key={subItem.id}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={subItem.path!}
                      className={cn(
                        "flex w-full items-center gap-2 select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        subItem.path === pathname && "font-bold"
                      )}
                    >
                      <IconWrapper
                        icon={subItem.icon!}
                        height="24"
                        width="24"
                      />
                      {subItem.heading}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );

    default:
      return (
        <NavigationMenuItem>
          <Link href={item.path!} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                item.path === pathname && "!bg-accent",
                navigationMenuTriggerStyle()
              )}
            >
              {item.heading}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      );
  }
}
