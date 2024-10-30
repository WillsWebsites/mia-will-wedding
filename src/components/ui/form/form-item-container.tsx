import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const FormItemContainer: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, children, ...props }) => {
  return (
    <div className={cn("w-full md:w-[calc(50%-12px)]", className)} {...props}>
      {children}
    </div>
  );
};

export default FormItemContainer;
