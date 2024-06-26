import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CustomBadgeProps {
  children?: ReactNode;
  icon?: JSX.Element;
  className?: string;
}

const CustomBadge = ({
  children = "Custom Badge",
  icon,
  className,
}: CustomBadgeProps) => {
  return (
    <div
      className={cn(
        "flex max-w-[10rem] gap-x-0 lg:gap-x-2 bg-gradient-to-t from-[#EFFE93] rounded-lg from-80% to-[#fff] items-center justify-center lg:px-4 lg:py-2 px-[0.6rem] py-1 font-semibold text-[#7BB20A]",
        className
      )}
    >
      <div className="lg:scale-100 scale-75">{icon}</div>
      <p className="lg:text-lg text-xs">{children}</p>
    </div>
  );
};

export default CustomBadge;
