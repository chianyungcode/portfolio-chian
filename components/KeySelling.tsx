import { Rocket } from "lucide-react";
import CustomBadge from "./small-components/CustomBadge";
import Code from "./small-components/svg/Code";
import Pen from "./small-components/svg/Pen";
import Star from "./small-components/svg/Star";
import Wallet from "./small-components/svg/Wallet";

const KeySelling = () => {
  return (
    <section className="mx-auto max-w-[1440px] space-y-12 px-4 py-6 md:px-16 lg:mt-12 lg:px-[112px] lg:py-[96px]">
      <div className="relative flex flex-col gap-x-3 gap-y-4 lg:flex-row">
        <h1 className="text-xl font-bold lg:text-3xl ">Create and help you</h1>
        <div className="left-[300px] flex flex-wrap gap-x-2 lg:absolute">
          <CustomBadge
            icon={<Star />}
            className="z-[4] lg:absolute lg:-translate-y-10 lg:rotate-12"
          >
            Brainstorming
          </CustomBadge>
          <CustomBadge
            icon={<Code />}
            className="z-[3] rotate-[-6deg] from-[#F2E4FF] text-[#B555EA] lg:absolute lg:-translate-y-2 lg:-rotate-[16deg]"
          >
            Code
          </CustomBadge>
          <CustomBadge
            icon={<Pen />}
            className="left-12 z-[2] rotate-1 from-[#FFE08B] text-[#F38B2B] lg:absolute lg:rotate-6  "
          >
            Illustration
          </CustomBadge>
          <CustomBadge
            icon={<Wallet />}
            className="z-[1] -rotate-6 from-[#D1E8FA] text-[#539BEE] lg:absolute lg:translate-y-4"
          >
            Budgeting
          </CustomBadge>
        </div>
      </div>
      <div className="space-y-2 text-2xl font-medium">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 flex items-center rounded-[16px] border-2 border-gray-200 px-4 py-4 text-sm sm:px-8 lg:col-span-3 lg:rounded-3xl lg:px-[4rem] lg:py-14 lg:text-2xl xl:px-[5rem] xl:py-20">
            <Rocket className="h-[50%] w-[50%] sm:hidden" />
            Helping Startups, B2B services, small businesses and creatives with
            customized design solutions that include landing pages & website
            creation.
          </div>
          <div className="col-span-1 hidden items-center rounded-3xl border-2 border-gray-200 px-16 py-24 lg:block lg:px-[2rem] lg:py-14 xl:flex xl:px-[4rem] xl:py-2">
            Create and code at the same time
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 flex items-center  rounded-3xl border-2 border-gray-200 px-4  py-4 text-sm sm:px-6 sm:py-6 md:col-span-3 md:px-8 md:py-14 lg:col-span-2 lg:h-max lg:px-[4rem] lg:text-2xl xl:px-[7.5rem] xl:py-24">
            A creative developer with a passion for design and development. From
            concept to launch, I am involved in every step of the process. User
            experience, visually striking design, engaging interactions and
            impeccable typography are my top priorities.
          </div>

          <div className="col-span-2 flex flex-col gap-4 gap-y-2 md:col-span-1 md:flex-col lg:col-span-2 lg:flex-col">
            <div className="col-span-1 flex grow  items-center justify-center rounded-3xl border-2 border-gray-200 text-center text-xl lg:px-16 lg:py-14 lg:text-4xl ">
              150+ Project
            </div>
            <div className="col-span-1 flex grow  items-center justify-center rounded-3xl border-2 border-gray-200 text-center text-xl lg:px-16 lg:py-14 lg:text-4xl">
              41+ Clients
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 hidden items-center rounded-3xl border-2 border-gray-200 py-24 lg:flex lg:px-[4rem] ">
            Faster development and no boilerplate code
          </div>
          <div className="col-span-1 hidden rounded-3xl border-2 border-gray-200 py-24 lg:flex lg:px-[4rem]">
            Get better SEO and first page in Google
          </div>
          <div className="col-span-1 hidden rounded-3xl border-2 border-gray-200 py-24 lg:flex lg:px-[4rem]">
            Attract audience with good visual website
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeySelling;
