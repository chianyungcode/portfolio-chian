import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import ButtonGlow from "./small-components/ButtonGlow";
import Modal from "./Modal";
import Link from "next/link";

const FooterCTA = () => {
  return (
    <footer className="max-w-[1440px] lg:block mx-auto lg:px-[112px] px-4 py-6 lg:pt-[96px] pb-12 space-y-12 mt-12 relative">
      <div className="w-full absolute bottom-0 left-0 h-full overflow-hidden flex justify-center">
        <div className=" h-[914px] w-[914px] bg-lime-200 top-[400px] rounded-full relative blur-[12rem]" />
      </div>
      {/* <div className="rounded-[3.75rem] border-2 border-gray-200 flex items-start bg-gradient-to-tl  from-[#fff] backdrop-blur-lg from-50% to-[#ffff] to-0% h-96"></div> */}
      <div className="lg:rounded-[3.75rem] rounded-[2rem] border-2 border-gray-200 flex items-start bg-transparent backdrop-blur-lg z-[10] bg-gradient-to-t from-white from-2% to-transparent lg:p-[7rem] py-[44px] px-[36px] flex-col lg:gap-y-12 gap-y-8">
        <h1 className="font-semibold lg:text-6xl max-w-4xl text-xl">
          Ready to grow your business through empathic visual style? Let&apos;s
          make it happen
        </h1>

        <Modal
          titleBtn="Start a project"
          titleModal="Tell what your need"
          description="Explain what your need, let us solve your problem"
        />

        <hr className="border-gray-200 border-1 w-full" />
        <div className="flex w-full flex-row justify-between items-start">
          <div className="space-y-2 lg:block hidden">
            <p className="text-slate-400 font-medium block">Connect</p>
            <a
              href="mailto:chianyung5@gmail.com"
              className="text-gray-950 font-medium block"
            >
              chianyung5@gmail.com
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex gap-x-4">
              <Link
                href="https://facebook.com"
                className="lg:w-14 lg:h-14 h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center"
              >
                <FaFacebook size={28} />
              </Link>
              <Link
                href="https://github.com/chianyungcode"
                className="lg:w-14 lg:h-14 h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center"
              >
                <BsGithub size={28} />
              </Link>
              <Link
                href="https://twitter.com"
                className="lg:w-14 lg:h-14 h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center"
              >
                <BsTwitterX size={28} />
              </Link>
              <Link
                href="https://linked.in"
                className="lg:w-14 lg:h-14 h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center"
              >
                <BsLinkedin size={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
