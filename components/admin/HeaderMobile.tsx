"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDENAV_ITEMS } from "@/constants";
import { motion, useCycle } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

const HeaderMobile = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
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
        className="absolute inset-0 right-0 w-full bg-secondary"
        variants={ContainerCircularDropdown}
      />
      <motion.ul
        variants={variants}
        className="absolute grid w-full gap-3 px-10 py-16"
      >
        <Accordion type="single" collapsible className="w-full space-y-4">
          {SIDENAV_ITEMS.map((item, idx) => {
            const isLastItem = idx === SIDENAV_ITEMS.length - 1; // Check if it's the last item

            return (
              <div key={idx}>
                {item.submenu ? (
                  <motion.li variants={MenuItemVariants}>
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
                  </motion.li>
                ) : (
                  <motion.li variants={MenuItemVariants}>
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
                    {!isLastItem && <Separator />}
                  </motion.li>
                )}
              </div>
            );
          })}
        </Accordion>
      </motion.ul>

      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

export default HeaderMobile;

/* ******************************** ANIMATED TOGGLE BUTTON ******************************* */
const MenuToggle = ({ toggle }: { toggle: any }) => {
  const { theme } = useTheme();
  const stroke = theme === "light" ? "hsl(0, 0%, 0%)" : "hsl(0,0%,100%)";
  return (
    <button
      onClick={toggle}
      className="pointer-events-auto absolute right-4 top-[14px] z-30"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          stroke={stroke}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          stroke={stroke}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          stroke={stroke}
        />
      </svg>
    </button>
  );
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    strokeLinecap="round"
    {...props}
  />
);

/* ******************************** ANIMATION HOOKS ******************************* */
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

/* ******************************** ANIMATION VARIANTS ******************************* */
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
