import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import ButtonGlow from "./small-components/ButtonGlow";
import Modal from "./Modal";
import Link from "next/link";

const FooterCTA = () => {
  return (
    <footer className="relative mx-auto mt-12 max-w-[1440px] space-y-12 px-4 py-6 pb-12 md:px-16 lg:block lg:px-[112px] lg:pt-[96px]">
      <div className="absolute bottom-0 left-0 flex h-full w-full justify-center overflow-hidden">
        <div className=" relative top-[400px] h-[914px] w-[914px] rounded-full bg-lime-200 blur-[12rem]" />
      </div>
      {/* <div className="rounded-[3.75rem] border-2 border-gray-200 flex items-start bg-gradient-to-tl  from-[#fff] backdrop-blur-lg from-50% to-[#ffff] to-0% h-96"></div> */}
      <div className="from-2% z-[10] flex flex-col items-start gap-y-8 rounded-[2rem] border-2 border-gray-200 bg-transparent bg-gradient-to-t from-white to-transparent px-[36px] py-[44px] backdrop-blur-lg lg:gap-y-12 lg:rounded-[3.75rem] lg:p-[7rem]">
        <h1 className="max-w-4xl text-xl font-semibold lg:text-6xl">
          Ready to grow your business through empathic visual style? Let&apos;s
          make it happen
        </h1>

        <Modal
          titleBtn="Start a project"
          titleModal="Tell what your need"
          description="Explain what your need, let us solve your problem"
        />

        <hr className="border-1 w-full border-gray-200" />
        <div className="flex w-full flex-row items-start justify-between">
          <div className="hidden space-y-2 lg:block">
            <p className="block font-medium text-slate-400">Connect</p>
            <a
              href="mailto:chianyung5@gmail.com"
              className="block font-medium text-gray-950"
            >
              dummy@gmail.com
            </a>
          </div>
          <div className="space-y-4">
            <h1 className="text-sm font-medium text-slate-400 xl:text-base">
              Follow
            </h1>
            <div className="flex gap-x-4">
              <Link
                href="https://facebook.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 lg:h-14 lg:w-14"
              >
                <FaFacebook size={28} />
              </Link>
              <Link
                href="https://github.com/chianyungcode"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 lg:h-14 lg:w-14"
              >
                <BsGithub size={28} />
              </Link>
              <Link
                href="https://twitter.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 lg:h-14 lg:w-14"
              >
                <BsTwitterX size={28} />
              </Link>
              <Link
                href="https://linked.in"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 lg:h-14 lg:w-14"
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
