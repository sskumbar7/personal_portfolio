import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";




const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#1D857E] to-[#178076] text-white shadow-[0_4px_14px_rgba(29,133,126,0.22),0_2px_6px_rgba(29,133,126,0.08)] hover:bg-gradient-to-r hover:from-[#1e8880] hover:to-[#1a7c76] hover:shadow-[0_6px_20px_rgba(29,133,126,0.28),0_2px_8px_rgba(29,133,126,0.12)] hover:-translate-y-[2px] active:translate-y-[-1px] active:scale-98",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-transparent border-[1.5px] border-[rgba(29,133,126,0.3)] text-[#1D857E] relative rounded-xl hover:border-[#1D857E] active:scale-98 after:content-[''] after:absolute after:bottom-[11px] after:left-[32px] after:right-[32px] after:h-[1px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-auto px-8 py-3 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
