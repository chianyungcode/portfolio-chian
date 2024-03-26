import { jobExperience } from "@/lib/dummyData";
import { cn } from "../lib/utils";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="max-w-[1440px] px-[112px] py-[96px] mx-auto space-y-12 mt-20">
      <h1 className="text-3xl  font-semibold">About me</h1>
      <div className="space-y-20">
        <div className="grid grid-cols-8 ">
          <div className="flex justify-start col-span-2">
            <Image
              src="/assets/images/image-profile.jpeg"
              alt="Chian Yung"
              className="rounded-full grayscale duration-300 hover:grayscale-0 transition-all w-48 h-48"
              width={192}
              height={192}
            />
          </div>
          <div className="col-span-6 grid grid-cols-6 gap-x-8">
            <div className="col-span-4 space-y-2">
              <h3 className="font-semibold text-xl">A few words to myself</h3>
              <p className="text-lg font-normal text-gray-400">
                I am a software engineer who loves to build things. I am
                passionate about web technologies and I am always looking for
                new challenges. I am a big fan of open source and I love to
                contribute to the community. I am also a big fan of the JAMstack
                and I love to build things with it.
              </p>
              <p className="text-lg text-gray-400 font-normal">
                I am a software engineer who loves to build things. I am
                passionate about web technologies and I am always looking for
                new challenges. I am a big fan of open source and I love to
                contribute to the community. I am also a big fan of the JAMstack
                and I love to build things with it.
              </p>
            </div>
            <div className="col-span-1 space-y-2">
              <h1 className="font-semibold text-lg">Socials</h1>
              <div className="space-y-1 font-medium flex flex-col">
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
            <div className="col-span-1 space-y-2">
              <h1 className="font-semibold text-lg">Contact</h1>
              <div className="space-y-1 font-medium flex flex-col">
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
        <div className="grid grid-cols-8">
          <div className="col-span-2">
            <h2 className="font-semibold text-2xl">Experience</h2>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col gap-y-8">
              <ul className="space-y-12">
                {jobExperience.map((job) => (
                  <div className="space-y-1" key={job.title}>
                    <h1 className="text-xl font-medium">
                      {job.title} ({job.company})
                    </h1>
                    <p className="font-normal text-base">
                      {job.startDate} -{" "}
                      <span
                        className={cn(
                          "font-normal",
                          job.endDate === "Present"
                            ? "text-green-600 font-medium"
                            : ""
                        )}
                      >
                        {job.endDate}
                      </span>
                    </p>
                    <p className="text-gray-400 font-normal">
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
