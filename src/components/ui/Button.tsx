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
  "border text-white rounded-md p-2 m-1 transform hover:-translate-y-1 transition duration-400 focus:outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 hover:bg-blue-700 border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-blue-600",
        outline:
          "bg-transparent border-blue-600 hover:bg-blue-700 hover:text-white ring-2 ring-offset-2 ring-blue-600",
        focus:
          "bg-blue-600 hover:bg-blue-700 border-transparent ring-2 ring-offset-2 ring-blue-600",
        animate:
          "bg-blue-600 text-white hover:scale-105 hover:bg-blue-700 transition-transform focus:ring-2 focus:ring-offset-2",
        none: "border-none ring-none",
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
