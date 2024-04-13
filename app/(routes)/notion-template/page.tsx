"use client";

import SectionContainer from "@/components/small-components/SectionContainer";
import TemplateCard from "@/components/small-components/TemplateCard";
import { notionTemplates } from "@/constant";
import { tabNotionCategories } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";

const NotionTemplatePage = () => {
  const [tab, setTab] = useState<tabNotionCategories>("productive");

  return (
    <SectionContainer>
      <h1 className="mt-20 text-xl font-bold xl:text-5xl">Notion Template</h1>
      <div className="flex w-full flex-wrap gap-x-2 gap-y-2">
        <div className="productive-bar" onClick={() => setTab("productive")}>
          <div className="gradient-line" />
          <p>Productive</p>
        </div>
        <div className="productive-bar" onClick={() => setTab("wealth")}>
          <div className="gradient-line" />
          <p>Wealth</p>
        </div>
        <div className="productive-bar" onClick={() => setTab("health")}>
          <div className="gradient-line" />
          <p>Health</p>
        </div>
      </div>
      {/* {tab === "productive" && (
        <>
          <div className="flex w-full flex-col xl:hidden" id="card-box">
            <div className="flex flex-col gap-y-2">
              <div className="relative h-60 w-full overflow-hidden rounded-3xl border">
                <Image
                  src="/assets/images/notion-template-1.png"
                  alt="notion-product-1"
                  className="absolute inset-0"
                  fill
                  objectFit="cover"
                />
              </div>
              <div>
                <p className="ml-2 text-lg font-medium">
                  Daily planner template
                </p>
                <p className="ml-2 text-sm font-medium">by Revin Cakes</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col xl:hidden" id="card-box">
            <div className="flex flex-col gap-y-2">
              <div className="relative h-60 w-full overflow-hidden rounded-3xl border">
                <Image
                  src="/assets/images/notion-template-1.png"
                  alt="notion-product-1"
                  className="absolute inset-0"
                  fill
                  objectFit="cover"
                />
              </div>
              <div>
                <p className="ml-2 text-lg font-medium">
                  Daily planner template
                </p>
                <p className="ml-2 text-sm font-medium">by Revin Cakes</p>
              </div>
            </div>
          </div>
        </>
      )} */}
      {notionTemplates[tab].map((template) => (
        <div key={template.author}>
          <TemplateCard
            src={template.src}
            alt={template.alt}
            title={template.title}
            author={template.author}
          />
        </div>
      ))}{" "}
      <div className="hidden grid-cols-4 gap-x-3 xl:grid">
        <div className="col-span-1 flex flex-col gap-y-2">
          <div className="flex gap-x-4 rounded-3xl border border-slate-200 xl:px-6 xl:py-8">
            <div className="h-full w-3  rounded-full bg-gradient-to-t from-purple-500 to-purple-100" />
            <h1 className="text-3xl font-bold">Productive</h1>
          </div>
          <div className="flex min-h-[40rem] gap-x-4 rounded-3xl border border-slate-200 font-medium xl:px-6 xl:py-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus aspernatur necessitatibus dolore hic, delectus odio
              accusantium, mollitia culpa accusamus sint quibusdam? Porro optio
              cumque quae ad molestiae. Maxime, autem! Obcaecati.
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 xl:px-6 xl:py-8">
            <div className="absolute -bottom-28 right-0 h-[622px] w-[524px] overflow-hidden rounded-3xl border border-gray-950 transition-transform group-hover:-rotate-[6deg]">
              <Image
                src="/assets/images/product-.png"
                alt="notion-screenshot"
                className="absolute"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-32 right-0 h-[622px] w-[524px] -rotate-6 overflow-hidden rounded-3xl border border-gray-950 transition-transform group-hover:-rotate-[12deg]">
              <Image
                src="/assets/images/product-.png"
                alt="notion-screenshot"
                className="absolute"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-40 right-0 h-[622px] w-[524px] -rotate-12 overflow-hidden rounded-3xl border border-gray-950 transition-all group-hover:-rotate-[16deg]">
              <Image
                src="/assets/images/product-.png"
                alt="notion-screenshot"
                className="absolute"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden grid-cols-4 gap-x-3 xl:grid">
        <div className="col-span-1 flex flex-col gap-y-2">
          <div className="flex gap-x-4 rounded-3xl border border-slate-200 xl:px-6 xl:py-8">
            <div className="h-full w-3  rounded-full bg-gradient-to-t from-[#198A8D] to-[#5BD68E]" />
            <h1 className="text-3xl font-bold">Health</h1>
          </div>
          <div className="flex min-h-[40rem] gap-x-4 rounded-3xl border border-slate-200 font-medium xl:px-6 xl:py-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus aspernatur necessitatibus dolore hic, delectus odio
              accusantium, mollitia culpa accusamus sint quibusdam? Porro optio
              cumque quae ad molestiae. Maxime, autem! Obcaecati.
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 xl:px-6 xl:py-8">
            <div className="absolute -bottom-28 right-0 h-[622px] w-[524px] overflow-hidden rounded-3xl border border-gray-950 transition-transform group-hover:-rotate-[6deg]">
              <Image
                src="/assets/images/product-.png"
                alt="notion-screenshot"
                className="absolute"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-32 right-0 h-[622px] w-[524px] -rotate-6 overflow-hidden rounded-3xl border border-gray-950 transition-transform group-hover:-rotate-[12deg]">
              <Image
                src="/assets/images/product-.png"
                alt="notion-screenshot"
                className="absolute"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-40 right-0 h-[622px] w-[524px] -rotate-12 overflow-hidden rounded-3xl border border-gray-950 transition-all group-hover:-rotate-[16deg]">
              <Image
                src="/assets/images/product-.png"
                alt="notion-screenshot"
                className="absolute"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden grid-cols-4 gap-x-3 xl:grid">
        <div className="col-span-1 flex flex-col gap-y-2">
          <div className="flex gap-x-4 rounded-3xl border border-slate-200 xl:px-6 xl:py-8">
            <div className="h-full w-3  rounded-full bg-gradient-to-t from-[#8DCDFF] to-[#D1E8FA]" />
            <h1 className="text-3xl font-bold">Wealth</h1>
          </div>
          <div className="flex min-h-[40rem] gap-x-4 rounded-3xl border border-slate-200 font-medium xl:px-6 xl:py-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus aspernatur necessitatibus dolore hic, delectus odio
              accusantium, mollitia culpa accusamus sint quibusdam? Porro optio
              cumque quae ad molestiae. Maxime, autem! Obcaecati.
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 xl:px-6 xl:py-8">
            <div className="absolute -bottom-28 right-0 h-[622px] w-[524px] overflow-hidden rounded-3xl border border-gray-950 transition-transform group-hover:-rotate-[6deg]">
              <Image
                src="/assets/images/product-.png"
                alt="notion-screenshot"
                className="absolute"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-32 right-0 h-[622px] w-[524px] -rotate-6 overflow-hidden rounded-3xl border border-gray-950 transition-transform group-hover:-rotate-[12deg]">
              <Image
                src="/assets/images/product-.png"
                alt="notion-screenshot"
                className="absolute"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-40 right-0 h-[622px] w-[524px] -rotate-12 overflow-hidden rounded-3xl border border-gray-950 transition-all group-hover:-rotate-[16deg]">
              <Image
                src="/assets/images/product-.png"
                alt="notion-screenshot"
                className="absolute"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default NotionTemplatePage;
