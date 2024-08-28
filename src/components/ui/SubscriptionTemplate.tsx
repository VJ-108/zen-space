import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "../../utils/cn";

interface SubscriptionTemplateProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SubscriptionTemplateVariants> {
  title: string;
  price: string;
  perks: Array<string>;
  titleVariant?: VariantProps<typeof titleVariants>;
  priceVariant?: VariantProps<typeof priceVariants>;
  listVariant?: VariantProps<typeof listVariants>;
}

const SubscriptionTemplate = ({
  title,
  price,
  perks,
  variant,
  className,
  titleVariant,
  priceVariant,
  listVariant,
  ...props
}: SubscriptionTemplateProps) => {
  return (
    <>
      <div
        {...props}
        className={cn(SubscriptionTemplateVariants({ variant, className }))}
      >
        <h3 className={cn(titleVariants({ ...titleVariant }))}>{title}</h3>
        <p className={cn(priceVariants({ ...priceVariant }))}>{price}</p>
        <Button size={"large"} variant={"focus"} className="w-full my-10">
          Choose Plan
        </Button>
        <h2 className="text-base md:text-xl text-gray-200">This includes: </h2>
        <ul className={cn(listVariants({ ...listVariant }))}>
          {perks.map((perk, index) => (
            <li key={index} className="py-1 md:py-3">
              <FontAwesomeIcon icon={faCircleCheck} /> {perk}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const SubscriptionTemplateVariants = cva(
  "border rounded-lg p-8 cursor-pointer transition-transform duration-300 ",
  {
    variants: {
      variant: {
        default:
          "md:hover:outline md:hover:outline-blue-600 md:hover:shadow-xl md:hover:shadow-cyan-600 md:hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const titleVariants = cva(" my-4 text-center", {
  variants: {
    variant: {
      default: "text-2xl md:text-4xl font-bold text-gray-200",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const priceVariants = cva("text-center my-4", {
  variants: {
    variant: {
      default: "text-gray-300 text-lg md:text-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const listVariants = cva("", {
  variants: {
    variant: {
      default: "my-4 md:my-6 text-base md:text-xl text-gray-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default SubscriptionTemplate;
