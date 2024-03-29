"use client";
// React and Next.js
import { motion, useCycle } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sling as Hamburger } from "hamburger-react";
import IconWrapper from "../shared/IconWrapper";

// Icon

// Constants and Utilities
import { NavigationRoutes } from "@/constants";
import { useAuthModal } from "@/hooks/use-auth-modal";
import { useUserStore } from "@/hooks/userStore";
import { Navigation } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ui/mode-toggle";

function HeaderMobile() {
  // Ref for the container element
  const containerRef = useRef(null);

  // Calculate the height using a custom hook (useDimensions)
  const { height } = useDimensions(containerRef);

  // Toggle state for opening and closing
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-sky-300/70 dark:bg-background/70"
        variants={ContainerCircularDropdown}
      />
      <NavigationContainer toggle={toggleOpen} />
      <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
    </motion.nav>
  );
}

export default HeaderMobile;

interface NavigationContainerProps {
  toggle: () => void;
}
function NavigationContainer({ toggle }: NavigationContainerProps) {
  // Access user data using custom hook
  const { user } = useUserStore();
  const { onOpen } = useAuthModal();

  return (
    <motion.ul
      variants={variants}
      className="absolute grid w-full gap-3 px-10 py-16"
    >
      <Accordion type="single" collapsible className="w-full space-y-4">
        {NavigationRoutes.map((item) => (
          <NavigationItem key={item.id} item={item} toggle={toggle} />
        ))}
      </Accordion>

      {/* Theme Change */}
      <motion.li
        variants={signinVariant}
        className="absolute bottom-0 right-1/2"
      >
        {!user && (
          <Button
            variant={"default"}
            className="w-full flex items-center gap-2"
            onClick={onOpen}
          >
            <IconWrapper icon="uil:signin" rotate={2} width="24" height="24" />
            <span className="font-semibold text-lg">SignIn</span>
          </Button>
        )}
      </motion.li>
      <motion.li variants={MenuItemVariants}>
        <ModeToggle />
      </motion.li>
    </motion.ul>
  );
}
type NavigationItemProps = {
  item: Navigation;
  toggle: () => void;
};
function NavigationItem({ item, toggle }: NavigationItemProps) {
  const { user } = useUserStore();
  const pathname = usePathname();

  if (item?.access && item?.access !== user?.role) return null;
  switch (item.submenu) {
    case true:
      return (
        <motion.li variants={MenuItemVariants}>
          <AccordionItem
            value={item.id}
            className="my-2
        "
          >
            <AccordionTrigger
              className={cn(
                "p-2 rounded-lg hover:bg-background transition-colors duration-300",
                pathname.includes(item.path!) ? "bg-accent" : ""
              )}
            >
              <div className="w-full flex space-x-4 items-center">
                <IconWrapper icon={item.icon!} height="24" width="24" />
                <span className="font-semibold text-xl">{item.heading}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="ml-12 space-y-2 my-2 list-none">
              {item.submenuItems?.map((subItem) => (
                <li key={subItem.id}>
                  <Link
                    onClick={toggle}
                    href={subItem.path!}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.heading}</span>
                  </Link>
                </li>
              ))}
            </AccordionContent>
          </AccordionItem>
        </motion.li>
      );
    default:
      return (
        <motion.li variants={MenuItemVariants}>
          <Link
            onClick={toggle}
            href={item.path!}
            className={cn(
              "flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-background transition-colors duration-300",
              item.path === pathname ? "!bg-accent" : ""
            )}
          >
            <IconWrapper icon={item.icon!} height="24" width="24" />
            <span className="font-semibold text-xl flex">{item.heading}</span>
          </Link>
        </motion.li>
      );
  }
}

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  const { theme } = useTheme();
  const [menuColor, setColor] = useState<string>("#fff");
  useEffect(() => {
    setColor(theme === "light" ? "#000" : "#fff");
  }, [theme]);
  return (
    <button
      onClick={toggle}
      className="pointer-events-auto absolute right-4 top-2 z-30"
    >
      <Hamburger size={28} color={menuColor} />
    </button>
  );
};

/* ******************************** ANIMATION ******************************* */
const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);
  return dimensions.current;
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const ContainerCircularDropdown = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};
const signinVariant = {
  open: {
    y: 0,
    x: "50%",
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    x: "50%",
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};
