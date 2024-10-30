import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Row: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("flex w-full flex-col gap-2 md:flex-row", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Row;
