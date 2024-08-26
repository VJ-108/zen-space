import { HTMLAttributes } from "react";
import cn from "../../utils/cn";
import { cva, VariantProps } from "class-variance-authority";

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title: string;
  description: string;
  titleVariant?: VariantProps<typeof titleVariants>;
  descriptionVariant?: VariantProps<typeof descriptionVariants>;
}

const Card = ({
  title,
  description,
  variant,
  className,
  titleVariant,
  descriptionVariant,
  ...props
}: CardProps) => {
  return (
    <div {...props} className={cn(cardVariants({ variant, className }))}>
      <h3 className={cn(titleVariants({ ...titleVariant }))}>{title}</h3>
      <p className={cn(descriptionVariants({ ...descriptionVariant }))}>
        {description}
      </p>
    </div>
  );
};

const cardVariants = cva(
  "rounded-lg p-6 cursor-pointer transform duration-300 hover:ring-4 hover:ring-blue-600 hover:-translate-y-4",
  {
    variants: {
      variant: {
        default: "bg-white",
        metallic: "bg-zinc-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const titleVariants = cva("font-semibold mb-4 ", {
  variants: {
    variant: {
      default: "text-neutral-800",
      metallic: "text-neutral-200",
    },
    size: {
      small: "text-lg md:text-xl",
      medium: "text-xl md:text-2xl",
      large: "text-2xl md:text-3xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "medium",
  },
});

const descriptionVariants = cva("", {
  variants: {
    variant: {
      default: "text-neutral-700",
      metallic: "text-neutral-400",
    },
    size: {
      small: "text-sm md:text-base",
      medium: "text-base md:text-lg",
      large: "text-lg md:text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "medium",
  },
});

export default Card;
