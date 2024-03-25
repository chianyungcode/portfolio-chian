"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="h-20 mx-auto max-w-[1440px] px-[112px] flex items-center inset-0 fixed z-[999]">
      <motion.div
        className="w-full backdrop-blur-sm border rounded-3xl border-gray-300 px-8 py-1 flex items-center justify-between"
        whileHover={{ scale: 1.005, transition: { ease: "easeOut" } }}
        whileTap={{ scale: 1.01, transition: { ease: "easeOut" } }}
      >
        <h3 className="font-semibold text-xl">
          Chian Yung{" "}
          <span className="text-gray-400 font-normal text-md ml-1">
            Software Engineer
          </span>{" "}
        </h3>

        <div className="p-2 flex gap-4 font-medium">
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
