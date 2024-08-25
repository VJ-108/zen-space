const Hero = () => {
  return (
    <>
      <div className="text-white my-2 mx-10 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 h-screen">
        <div className="flex justify-center items-center w-full md:w-2/3">
          <div className="text-4xl md:text-7xl font-bold text-center md:text-left leading-tight">
            Your <span className="text-blue-700 ">Sanctuary</span> for{" "}
            <span className="text-blue-700">Meditation</span>,{" "}
            <span className="text-blue-700">Wellness</span>, and Inner Peace
          </div>
        </div>
        <div className="w-full md:w-1/3 hidden md:flex justify-center items-center">
          {/* Add any additional content or imagery here */}
        </div>
      </div>
    </>
  );
};

export default Hero;
