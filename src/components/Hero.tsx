const Hero = () => {
  return (
    <>
      <div className="container px-5 mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 h-screen md:-mt-14">
        <div className="flex justify-center items-center w-full md:w-2/3">
          <div className="text-4xl md:text-7xl font-bold text-center md:text-left leading-tight pt-24 md:pt-0 ">
            Your <span className="text-blue-700 ">Sanctuary</span> for{" "}
            <span className="text-blue-700">Meditation</span>,{" "}
            <span className="text-blue-700">Wellness</span>, and Inner Peace
          </div>
        </div>
        <div className="w-full md:w-1/3 hidden md:flex justify-center items-center">
          <img
            src="../../buddha-8940559_1920.png"
            className="invert rounded-full  cursor-pointer shadow-2xl shadow-orange-300"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
