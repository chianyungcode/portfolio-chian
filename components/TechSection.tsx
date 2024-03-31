import Image from "next/image";
import React from "react";
import { FaSquareCheck } from "react-icons/fa6";

const TechSection = () => {
  return (
    <section className="max-w-[1440px] lg:block hidden px-[112px] py-[96px] mx-auto space-y-12">
      <div className="grid grid-cols-4 gap-x-12">
        <div className="col-span-2 ">
          <h1 className="text-4xl font-semibold ">Apps I like using</h1>
          <div className="flex justify-between relative items-center h-full">
            <Image
              src="/assets/svg/discord.svg"
              alt="SVG Discord"
              width={50}
              height={50}
            />
            <Image
              src="/assets/svg/github.svg"
              alt="SVG Discord"
              width={50}
              height={50}
            />
            <Image
              src="/assets/svg/figma.svg"
              alt="SVG Discord"
              width={50}
              height={50}
            />
            <Image
              src="/assets/svg/dribble.svg"
              alt="SVG Discord"
              width={50}
              height={50}
            />
            <Image
              src="/assets/svg/linkedin.svg"
              alt="SVG Discord"
              width={50}
              height={50}
            />
            <Image
              src="/assets/svg/reddit.svg"
              alt="SVG Discord"
              width={50}
              height={50}
            />
            <div className="absolute top-0 left-0 w-[30%] h-full bg-gradient-to-r from-[#ffff] to-transparent" />
            <div className="absolute top-0 right-0 w-[30%] h-full bg-gradient-to-l from-[#ffff] to-transparent" />
          </div>
        </div>
        <div className="col-span-2 space-y-16">
          <h1 className="text-4xl font-semibold">Ongoing Project</h1>
          <div className="flex flex-col gap-y-4 text-lg">
            <div className="flex gap-x-4 items-center ">
              <FaSquareCheck size={30} />
              TicketApps
            </div>
            <div className="flex gap-x-4 items-center">
              <FaSquareCheck size={30} />
              TicketApps
            </div>
            <div className="flex gap-x-4 items-center">
              <FaSquareCheck size={30} />
              TicketApps
            </div>
            <div className="flex gap-x-4 items-center">
              <FaSquareCheck size={30} />
              TicketApps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
