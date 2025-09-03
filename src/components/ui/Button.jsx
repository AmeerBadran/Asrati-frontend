// components/ui/button.tsx
import * as React from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const variants = {
  default:
    "bg-secondary-100 text-white hover:bg-secondary-200 mr-2 !text-[16px] focus:ring-2 focus:ring-green-400",
  outline:
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400",
};

export const Button = forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
