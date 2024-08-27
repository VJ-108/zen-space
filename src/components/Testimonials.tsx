import { PeopleTestimonials } from "../utils/constant";
import Card from "./ui/Card";

const Testimonials = () => {
  return (
    <>
      <div className="container mx-auto mt-0 md:mt-16">
        <div className="text-2xl md:text-6xl font-bold mb-16 text-center">
          What Our Clients Say
        </div>
        <div className="grid grid-cols-4 gap-4">
          {PeopleTestimonials.map((test, index) => {
            return (
              <Card
                key={index}
                title={test.title}
                description={test.description}
                variant={"metallic"}
                titleVariant={{ variant: "metallic" }}
                descriptionVariant={{ variant: "metallic" }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
