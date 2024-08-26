import { useState, useEffect } from "react";
import { features } from "../utils/constant";

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-zinc-900 shadow-md rounded-lg p-6 cursor-pointer transform duration-300 hover:-translate-y-4 hover:ring-4 hover:ring-blue-600 hover:shadow-sm hover:shadow-cyan-600">
    <h3 className="md:text-2xl font-semibold mb-4 text-neutral-200">{title}</h3>
    <p className="md:text-lg text-neutral-400">{description}</p>
  </div>
);

const WhatWeProvide = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 768);

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
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
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
