"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="lg:h-20 lg:mx-auto md:px-16 lg:max-w-[1440px] lg:px-[112px] flex items-center lg:inset-0 h-[3.5rem] top-0 fixed z-40 px-4 py-2 w-full">
      <motion.div
        className="w-full backdrop-blur-sm border rounded-3xl border-gray-300 px-4 lg:px-8 lg:py-1 flex items-center justify-between lg:h-fit h-full"
        whileHover={{ scale: 1.005, transition: { ease: "easeOut" } }}
        whileTap={{ scale: 1.01, transition: { ease: "easeOut" } }}
      >
        <h3 className="font-semibold lg:text-xl text-base">
          Chian Yung
          <span className="text-gray-400 font-normal text-md ml-1 hidden lg:inline-block">
            Software Engineer
          </span>
        </h3>
        <Menu className="lg:hidden block" />
        <div className="p-2 lg:flex gap-4 font-medium hidden ">
          <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "font-bold" : ""}
          >
            About
          </Link>
          <Link
            href="/posts"
            className={pathname === "/posts" ? "font-bold" : ""}
          >
            Posts
          </Link>
          <Link
            href="/profile"
            className={pathname === "/profile" ? "font-bold" : ""}
          >
            Profile
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
