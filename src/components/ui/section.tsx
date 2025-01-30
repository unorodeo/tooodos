import React, { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

interface Props extends ComponentPropsWithoutRef<"section"> {
  bleed?: boolean;
}

export const Section: React.FC<Props> = ({
  children,
  bleed = false,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "max-w-4xl mx-auto px-4 py-6 md:px-6 md:py-12",
        {
          "max-w-full": bleed,
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
