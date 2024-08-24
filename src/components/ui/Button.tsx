import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}
const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

const buttonVariants = cva(
  "border border-black rounded-md p-2 text-base m-1 transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "bg-indigo-500 text-white hover:bg-indigo-600",
        secondary: "bg-purple-600 text-white hover:bg-purple-700",
      },
      size: {
        small: "text-sm py-1 px-2",
        medium: "text-base py-2 px-4",
        large: "text-lg py-3 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export default Button;
