import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="mt-12 flex max-w-[1440px] items-center justify-between space-y-12 px-4 py-[3.5rem] md:px-16 lg:mx-auto lg:mt-20 lg:px-[112px] lg:py-[96px]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-x-2 rounded-3xl bg-gray-100 px-2 py-1 font-semibold text-black lg:px-4 lg:py-2">
          <span className="relative flex h-2 w-2 lg:h-3 lg:w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-500 lg:h-3 lg:w-3"></span>
          </span>
          <p className="text-xs lg:text-xl">Available for new opportunities</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold lg:text-6xl">Software Engineer</h1>
          <p className="text-md max-w-xl">
            I am a software engineer with a passion for creating innovative
            solutions and a deep understanding of the latest technologies in the
            industry.
          </p>
        </div>
      </div>
      <Image
        src="/assets/images/image-profile-hero.png"
        className="hidden grayscale transition-all hover:grayscale-0 lg:block"
        alt="Hero Image"
        width={400}
        height={400}
      />
    </section>
  );
};

export default Hero;
