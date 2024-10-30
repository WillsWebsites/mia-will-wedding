import { type DetailedHTMLProps, type FC, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  fullWidth?: boolean;
}

const Container: FC<ContainerProps> = ({ fullWidth, className, ...props }) => {
  return (
    <div
      className={cn(
        "px-4 py-8 sm:px-8 md:py-24",
        fullWidth ? "w-full" : "container",
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Container;
