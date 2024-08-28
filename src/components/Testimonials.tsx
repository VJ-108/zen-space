import { PeopleTestimonials } from "../utils/constant";
import Card from "./ui/Card";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const visibleCards = window.innerWidth < 768 ? 1 : 3;

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === PeopleTestimonials.length - visibleCards
            ? 0
            : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="container mx-auto mt-8 md:mt-16 overflow-hidden">
      <div className="text-2xl md:text-6xl font-bold mb-8 md:mb-16 text-center">
        What Our Clients Say
      </div>
      <div
        className="transition-transform duration-500 ease-out flex"
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {PeopleTestimonials.map((test, index) => {
          return (
            <div
              key={index}
              className={`min-w-[100%] md:min-w-[calc(100%/3)] p-4`}
            >
              <Card
                title={test.title}
                description={test.description}
                variant={"metallic"}
                titleVariant={{ variant: "metallic" }}
                descriptionVariant={{ variant: "metallic" }}
                className="md:h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
