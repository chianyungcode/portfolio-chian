import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[1440px] lg:px-[112px] lg:py-[96px] lg:mx-auto space-y-12 mt-12 lg:mt-20 flex py-[3.5rem] px-4 items-center justify-between">
      <div className="space-y-3">
        <div className="lg:px-4 lg:py-2 px-2 py-1 bg-gray-100 text-black font-semibold rounded-3xl inline-flex gap-x-2 items-center">
          <span className="relative flex w-2 h-2 lg:h-3 lg:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full w-2 h-2 lg:h-3 lg:w-3 bg-lime-500"></span>
          </span>
          <p className="text-xs lg:text-xl">Available for new opportunities</p>
        </div>
        <div className="space-y-2">
          <h1 className="lg:text-6xl text-3xl font-bold">Software Engineer</h1>
          <p className="max-w-xl text-sm">
            I am a software engineer with a passion for creating innovative
            solutions and a deep understanding of the latest technologies in the
            industry.
          </p>
        </div>
      </div>
      <Image
        src="/assets/images/image-profile-hero.png"
        className="grayscale hover:grayscale-0 transition-all hidden lg:block"
        alt="Hero Image"
        width={400}
        height={400}
      />
    </section>
  );
};

export default Hero;
