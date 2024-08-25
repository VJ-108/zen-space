import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./ui/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="border-b-[3px] border-white rounded-full p-4 flex items-center justify-between shadow-lg shadow-blue-600 sticky top-0 z-50 bg-black/0 backdrop-blur-md">
        <div className="text-white font-bold text-base md:text-2xl font-heading px-2 cursor-pointer">
          Zen-Space
        </div>
        <div className="space-x-4 hidden md:flex">
          <Button variant="none" size={"large"}>
            Home
          </Button>
          <Button variant="none" size={"large"}>
            About
          </Button>
          <Button variant="none" size={"large"}>
            Course
          </Button>
          <Button variant="none" size={"large"}>
            Contact
          </Button>
        </div>
        <div className="block md:hidden text-white">
          <FontAwesomeIcon icon={faBars} className="h-5" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
