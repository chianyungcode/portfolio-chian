import Footer from "@/components/Footer";
import React from "react";

const LayoutRouter = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default LayoutRouter;
