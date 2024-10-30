import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const FormContainer: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div className={cn("max-w-[800px]", className)} {...props}>
      {children}
    </div>
  );
};

export default FormContainer;
