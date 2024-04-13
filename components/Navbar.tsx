"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navLinks } from "@/constant/navbar";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);

  // useEffect(() => {});

  return (
    <header className="fixed top-0 z-40 flex h-fit w-full items-center px-4 py-2 md:px-16 lg:inset-0 lg:mx-auto lg:h-20 lg:max-w-[1440px] lg:px-[112px]">
      <div
        className={cn(
          "flex w-full flex-col justify-center rounded-3xl border border-gray-300 px-4 py-1 backdrop-blur-sm transition-height ease-out lg:h-fit lg:flex-row lg:px-8 lg:py-1 ",
          openMobileNavbar ? "h-fit rounded-2xl" : "",
        )}
      >
        <div className="flex w-full items-center justify-between">
          <h3 className="text-base font-semibold lg:text-xl">
            Chian Yung
            <span className="text-md ml-1 hidden font-normal text-gray-400 lg:inline-block">
              Software Engineer
            </span>
          </h3>
          {/* TODO akan memanjang kebawah ketika state open true */}
          <Menu
            className="block lg:hidden"
            onClick={() => setOpenMobileNavbar(!openMobileNavbar)}
          />
          <div className="hidden gap-4 p-2 font-medium lg:flex ">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                className={pathname === `${link.href}` ? "font-bold" : ""}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-3 flex flex-col items-center gap-y-1 text-sm xl:hidden",
            openMobileNavbar ? "sm:block" : "hidden",
          )}
        >
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className={pathname === `${link.href}` ? "font-bold" : ""}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
