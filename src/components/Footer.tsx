import Button from "./ui/Button";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto mt-28">
        <div className="text-center mb-14 hidden md:block">
          <Button size={"large"} className={"text-2xl"} variant={"outline"}>
            Get Started
          </Button>
        </div>
        <div className="border-t-2 flex justify-between items-center p-5 pb-12 text-sm md:text-lg flex-col md:flex-row">
          <ul className="flex gap-4 cursor-pointer flex-row">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <div className="mt-8 md:mt-0">
            2024 Zen-Space. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
