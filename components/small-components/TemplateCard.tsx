import Image from "next/image";
import React from "react";

interface TemplateCardProps {
  src: string;
  alt: string;
  title: string;
  author: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  alt,
  author,
  src,
  title,
}) => {
  return (
    <div className="flex w-full flex-col xl:hidden" id="card-box">
      <div className="flex flex-col gap-y-2">
        <div className="relative h-60 w-full overflow-hidden rounded-3xl border">
          <Image
            src={src}
            alt={alt}
            className="absolute inset-0"
            fill
            objectFit="cover"
          />
        </div>
        <div>
          <p className="ml-2 text-lg font-medium">{title}</p>
          <p className="ml-2 text-sm font-medium">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
