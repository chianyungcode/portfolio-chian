import CustomBadge from "./small-components/CustomBadge";
import Code from "./small-components/svg/Code";
import Pen from "./small-components/svg/Pen";
import Star from "./small-components/svg/Star";
import Wallet from "./small-components/svg/Wallet";

const KeySelling = () => {
  return (
    <section className="max-w-[1440px] mx-auto lg:px-[112px] lg:py-[96px] space-y-12 lg:mt-12 py-6 px-4">
      <div className="flex lg:flex-row flex-col relative gap-x-3 gap-y-4">
        <h1 className="lg:text-3xl text-xl font-bold ">Create and help you</h1>
        <div className="lg:absolute  left-[300px] flex gap-x-2 flex-wrap">
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
          <div className="col-span-4 rounded-[16px] gap-x-4 lg:rounded-3xl border border-gray-200 lg:px-[7.5rem] lg:py-24 px-4 py-4 flex items-center text-sm">
            Helping Startups, B2B services, small businesses and creatives with
            customized design solutions that include landing pages & website
            creation.
          </div>
          <div className="col-span-1 hidden lg:block rounded-3xl border border-gray-200 px-16 py-24">
            Lorem ipsum dolor sit
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2  rounded-3xl border border-gray-200 px-[7.5rem] py-24 flex items-center ">
            A creative developer with a passion for design and development. From
            concept to launch, I am involved in every step of the process. User
            experience, visually striking design, engaging interactions and
            impeccable typography are my top priorities.
          </div>
          <div className="col-span-1 rounded-3xl border border-gray-200 px-16 py-24 flex items-center text-4xl justify-center">
            150+ Project
          </div>
          <div className="col-span-1 rounded-3xl border border-gray-200 px-16 py-24 flex items-center text-4xl">
            41+ Clients
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1  rounded-3xl border border-gray-200 px-[7.5rem] py-24 flex items-center ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
            aliquid.
          </div>
          <div className="col-span-1 rounded-3xl border border-gray-200 px-16 py-24">
            Lorem ipsum dolor sit
          </div>
          <div className="col-span-1 rounded-3xl border border-gray-200 px-16 py-24">
            Lorem ipsum dolor sit
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeySelling;
