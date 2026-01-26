import React from "react";
import { cn } from "@/lib/utils";

/*  @define button variant 
     @define button size 
*/

type ButtonVariant = "deafault" | "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}
const variantClasses: Record<ButtonVariant, string> = {
  deafault:
    "bg-neutral-100 text-neutral-800 rounded-md border border-neutral-200",
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-green-500 text-white hover:bg-green-600",
};
const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};


/*Main parts of the Button*/
const Button: React.FC<ButtonProps> = ({ children, variant = "deafault", size = "md", className, ...props }) => 
  {
     const classes = cn(
    "rounded font-medium",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
