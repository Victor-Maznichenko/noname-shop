import { cva } from "class-variance-authority";
import { ElementType } from "react";

import { cn } from "@helpers";

type Variant =
  | "filled-lg-blue"
  | "outlined-lg-white-rounded"
  | "filled-sm-blue"
  | "filled-sm-blue-rounded"
  | "filled-sm-white-rounded"
  | "icon"
  | "text"
  | "unstyled";

type ButtonProps<E extends ElementType> = PolymorphicProps<E> & {
  variant?: Variant;
  className?: string;
};

const buttonVariants = cva(
  "focus-visible:ring-ring inline-block whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        "filled-lg-blue": "bg-blue-light p-2 text-l text-white hover:bg-blue-dark",
        "outlined-lg-white-rounded":
          "rounded border p-2 text-l text-blue-light hover:bg-blue-light hover:text-white",
        "filled-sm-blue": "bg-blue-light px-[6px] py-[5px] text-s text-white hover:bg-blue-dark",
        "filled-sm-blue-rounded": "rounded bg-blue-light p-1.5 text-m text-white hover:bg-blue-dark",
        "filled-sm-white-rounded": "hover:bg-sky-200 rounded bg-white p-1.5 text-m text-blue-light",
        text: "inline text-xs text-blue-light hover:text-blue-dark",
        icon: "rounded bg-white p-2 pt-1",
        unstyled: "",
      } as Record<Variant, string>,
    },
    defaultVariants: {
      variant: "filled-lg-blue",
    },
  }
);

export const Button = <E extends ElementType = "button">({
  variant = "filled-lg-blue",
  className,
  disabled,
  children,
  as,
  ...props
}: ButtonProps<E>) => {
  const Component = as ?? "button";

  return (
    <Component className={cn(buttonVariants({ variant, className }))} disabled={disabled} {...props}>
      {children}
    </Component>
  );
};
