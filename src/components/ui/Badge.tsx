import { ComponentProps } from "react";

import { cn } from "@helpers";

export const Badge = ({ className, children, ...props }: ComponentProps<"div">) => (
  <div className={cn("inline-flex items-center gap-x-1 rounded bg-white p-1", className)} {...props}>
    {children}
  </div>
);
