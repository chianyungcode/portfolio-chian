import { Rocket } from "lucide-react";
import CustomBadge from "./small-components/CustomBadge";
import Code from "./small-components/svg/Code";
import Pen from "./small-components/svg/Pen";
import Star from "./small-components/svg/Star";
import Wallet from "./small-components/svg/Wallet";

const KeySelling = () => {
  return (
    <section className="max-w-[1440px] md:px-16 mx-auto lg:px-[112px] lg:py-[96px] space-y-12 lg:mt-12 py-6 px-4">
      <div className="flex lg:flex-row flex-col relative gap-x-3 gap-y-4">
        <h1 className="lg:text-3xl text-xl font-bold ">Create and help you</h1>
        <div className="lg:absolute left-[300px] flex gap-x-2 flex-wrap">
          <CustomBadge
            icon={<Star />}
            className="lg:absolute lg:rotate-12 z-[4] lg:-translate-y-10"
          >
            Brainstorming
          </CustomBadge>
          <CustomBadge
            icon={<Code />}
            className="from-[#F2E4FF] z-[3] text-[#B555EA] lg:-translate-y-2 lg:absolute rotate-[-6deg] lg:-rotate-[16deg]"
          >
            Code
          </CustomBadge>
          <CustomBadge
            icon={<Pen />}
            className="text-[#F38B2B] from-[#FFE08B] lg:absolute rotate-1 lg:rotate-6 z-[2] left-12  "
          >
            Illustration
          </CustomBadge>
          <CustomBadge
            icon={<Wallet />}
            className="text-[#539BEE] z-[1] from-[#D1E8FA] lg:absolute -rotate-6 lg:translate-y-4"
          >
            Budgeting
          </CustomBadge>
        </div>
      </div>
      <div className="text-2xl font-medium space-y-2">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 lg:col-span-3 rounded-[16px] lg:rounded-3xl border-2 border-gray-200 xl:px-[5rem] xl:py-20 px-4 py-4 flex items-center lg:text-2xl text-sm sm:px-8 lg:px-[4rem] lg:py-14">
            <Rocket className="w-[50%] h-[50%] sm:hidden" />
            Helping Startups, B2B services, small businesses and creatives with
            customized design solutions that include landing pages & website
            creation.
          </div>
          <div className="col-span-1 hidden lg:block rounded-3xl border-2 border-gray-200 px-16 py-24 lg:px-[2rem] lg:py-14 xl:px-[4rem] xl:py-2 xl:flex items-center">
            Create and code at the same time
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 lg:text-2xl lg:h-max  md:col-span-3 lg:col-span-2 text-sm rounded-3xl  border-2 border-gray-200 xl:px-[7.5rem] xl:py-24 flex items-center md:py-14 md:px-8 lg:px-[4rem] sm:px-6 sm:py-6 py-4 px-4">
            A creative developer with a passion for design and development. From
            concept to launch, I am involved in every step of the process. User
            experience, visually striking design, engaging interactions and
            impeccable typography are my top priorities.
          </div>

          <div className="flex lg:flex-col flex-col md:flex-col md:col-span-1 lg:col-span-2 col-span-2 gap-y-2 gap-4">
            <div className="col-span-1 lg:text-4xl text-xl  rounded-3xl grow border-2 border-gray-200 lg:px-16 lg:py-14 flex items-center text-center justify-center ">
              150+ Project
            </div>
            <div className="col-span-1 lg:text-4xl text-xl  rounded-3xl grow border-2 border-gray-200 lg:px-16 lg:py-14 flex items-center text-center justify-center">
              41+ Clients
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 hidden lg:flex rounded-3xl border-2 border-gray-200 lg:px-[4rem] py-24 items-center ">
            Faster development and no boilerplate code
          </div>
          <div className="col-span-1 rounded-3xl hidden lg:flex border-2 border-gray-200 lg:px-[4rem] py-24">
            Get better SEO and first page in Google
          </div>
          <div className="col-span-1 rounded-3xl hidden lg:flex border-2 border-gray-200 lg:px-[4rem] py-24">
            Attract audience with good visual website
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeySelling;
