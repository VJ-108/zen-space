import { useState, useEffect } from "react";
import { features } from "../utils/constant";
import Card from "./ui/Card";

const WhatWeProvide = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleFeatures = isSmallScreen ? features.slice(0, 5) : features;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-6xl font-bold mb-6">
        Explore Our Offerings
      </h2>
      <p className="md:text-xl text-neutral-500 mb-8">
        Find a variety of resources and services focused on meditation,
        wellness, and holistic health.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleFeatures.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            description={feature.description}
            variant={"metallic"}
            titleVariant={{ variant: "metallic" }}
            descriptionVariant={{ variant: "metallic" }}
          />
        ))}
      </div>

      {isSmallScreen && features.length > 5 && (
        <p className="text-center mt-6 text-neutral-500">And many more...</p>
      )}
    </div>
  );
};

export default WhatWeProvide;
