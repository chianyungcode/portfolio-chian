import React from "react";

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-[1440px] md:px-16 mx-auto lg:px-[112px] lg:py-[96px] space-y-12 lg:mt-12 py-6 px-4">
      {children}
    </section>
  );
};

export default SectionContainer;
