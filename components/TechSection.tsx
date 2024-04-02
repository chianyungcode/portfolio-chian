"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaSquareCheck } from "react-icons/fa6";

const TechSection = () => {
  // State untuk menyimpan ukuran gambar
  const [imageSizeApp, setImageSizeApp] = useState({ width: 50, height: 50 });
  const [iconSize, setIconSize] = useState({ width: 30, height: 30 });

  useEffect(() => {
    const adjustimageSizeApp = () => {
      if (window.innerWidth < 320) {
        setImageSizeApp({ width: 30, height: 30 });
        setIconSize({ width: 20, height: 20 });
      } else if (window.innerWidth < 768) {
        setImageSizeApp({ width: 40, height: 40 });
        setIconSize({ width: 20, height: 25 });
      } else if (window.innerWidth < 1024) {
        setImageSizeApp({ width: 40, height: 40 });
        setIconSize({ width: 25, height: 25 });
      } else {
        setImageSizeApp({ width: 50, height: 50 });
        setIconSize({ width: 30, height: 30 });
      }
    };

    // Panggil fungsi saat komponen dimuat
    adjustimageSizeApp();

    // Tambahkan event listener untuk resize window
    window.addEventListener("resize", adjustimageSizeApp);

    // Bersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener("resize", adjustimageSizeApp);
  }, []);

  return (
    <section className="max-w-[1440px] xl:px-[112px] xl:py-[96px]  mx-auto space-y-12 md:px-16 lg:mt-12 py-6 px-4">
      <div className="xl:grid xl:grid-cols-4 gap-x-12 flex flex-col lg:gap-y-24 gap-y-12 xl:gap-y-48">
        <div className="col-span-2 space-y-8">
          <h1 className="xl:text-4xl font-semibold text-xl">
            Apps I like using
          </h1>
          <div className="flex justify-between relative items-center h-full">
            <Image
              src="/assets/svg/discord.svg"
              alt="SVG Discord"
              width={imageSizeApp.width}
              height={imageSizeApp.height}
            />
            <Image
              src="/assets/svg/github.svg"
              alt="SVG Discord"
              width={imageSizeApp.width}
              height={imageSizeApp.height}
            />
            <Image
              src="/assets/svg/figma.svg"
              alt="SVG Discord"
              width={imageSizeApp.width}
              height={imageSizeApp.height}
            />
            <Image
              src="/assets/svg/dribble.svg"
              alt="SVG Discord"
              width={imageSizeApp.width}
              height={imageSizeApp.height}
            />
            <Image
              src="/assets/svg/linkedin.svg"
              alt="SVG Discord"
              width={imageSizeApp.width}
              height={imageSizeApp.height}
            />
            <Image
              src="/assets/svg/reddit.svg"
              alt="SVG Discord"
              width={imageSizeApp.width}
              height={imageSizeApp.height}
            />
            <div className="absolute top-0 left-0 w-[30%] h-full bg-gradient-to-r from-[#ffff] to-transparent" />
            <div className="absolute top-0 right-0 w-[30%] h-full bg-gradient-to-l from-[#ffff] to-transparent" />
          </div>
        </div>
        <div className="col-span-2 space-y-4 md:space-y-8 xl:space-y-16">
          <h1 className="xl:text-4xl font-semibold text-xl">Ongoing Project</h1>
          <div className="flex flex-col gap-y-4 xl:text-lg text-sm">
            <div className="flex gap-x-4 items-center ">
              <FaSquareCheck size={iconSize.width} />
              TickTickets
            </div>
            <div className="flex gap-x-4 items-center">
              <FaSquareCheck size={iconSize.width} />
              Moviss
            </div>
            <div className="flex gap-x-4 items-center">
              <FaSquareCheck size={iconSize.width} />
              MailMov
            </div>
            <div className="flex gap-x-4 items-center">
              <FaSquareCheck size={iconSize.width} />
              Movs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
