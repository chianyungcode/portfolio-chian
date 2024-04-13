import { jobExperience } from "@/lib/dummyData";
import { cn } from "../lib/utils";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="mx-auto mt-12 max-w-[1440px] space-y-6 px-4 py-6 md:px-16 xl:mt-20 xl:space-y-12 xl:px-[112px] xl:py-[96px]">
      <h1 className="text-base font-semibold xl:text-3xl">About me</h1>
      <div className="space-y-14 xl:space-y-20">
        <div className="grid grid-cols-3 gap-x-4 xl:grid xl:grid-cols-8 ">
          <div className="col-span-1 flex justify-start xl:col-span-2">
            <Image
              src="/assets/images/image-profile.jpeg"
              alt="Chian Yung"
              className="h-24 w-24 rounded-full grayscale transition-all duration-300 hover:grayscale-0 xl:h-48 xl:w-48"
              width={192}
              height={192}
            />
          </div>
          <div className="col-span-2 grid gap-x-8 xl:col-span-6 xl:grid-cols-6">
            <div className="space-y-2 xl:col-span-4">
              <h3 className=" text-base font-semibold xl:text-xl">
                A few words to myself
              </h3>
              <p className="text-justify text-sm font-normal text-gray-400 xl:text-lg">
                I am a software engineer who loves to build things. I am
                passionate about web technologies and I am always looking for
                new challenges. I am a big fan of open source and I love to
                contribute to the community. I am also a big fan of the JAMstack
                and I love to build things with it.
              </p>
              <p className="text-justify text-sm font-normal text-gray-400 xl:text-lg">
                I am a software engineer who loves to build things. I am
                passionate about web technologies and I am always looking for
                new challenges. I am a big fan of open source and I love to
                contribute to the community. I am also a big fan of the JAMstack
                and I love to build things with it.
              </p>
            </div>
            <div className="col-span-1 hidden space-y-2 xl:block">
              <h1 className="text-lg font-semibold">Socials</h1>
              <div className="flex flex-col space-y-1 font-medium">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href="https://linked.in" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-span-1 hidden space-y-2 xl:block">
              <h1 className="text-lg font-semibold">Contact</h1>
              <div className="flex flex-col space-y-1 font-medium">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href="https://linked.in" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-8">
          <div className="col-span-1 xl:col-span-2">
            <h2 className="text-base font-semibold xl:text-2xl">Experience</h2>
          </div>
          <div className="col-span-2 xl:col-span-6">
            <div className="flex flex-col gap-y-8">
              <ul className="space-y-12">
                {jobExperience.map((job) => (
                  <div className="space-y-1" key={job.title}>
                    <h1 className="text-sm font-medium xl:text-xl">
                      {job.title} ({job.company})
                    </h1>
                    <p className="text-sm font-normal xl:text-base">
                      {job.startDate} -{" "}
                      <span
                        className={cn(
                          "font-normal",
                          job.endDate === "Present"
                            ? "font-medium text-green-600"
                            : "",
                        )}
                      >
                        {job.endDate}
                      </span>
                    </p>
                    <p className="text-justify text-sm font-normal text-gray-400 xl:text-lg">
                      {job.description}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
