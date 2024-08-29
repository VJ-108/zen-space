import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./ui/Button";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
            Services
          </Button>
          <Button variant="none" size={"large"}>
            Contact
          </Button>
        </div>
        <div className="block md:hidden text-white">
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            className="h-5 cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center space-y-8">
          <div className="absolute top-4 right-4">
            <FontAwesomeIcon
              icon={faTimes}
              className="h-8 text-white cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
          <Button variant="none" size={"large"} onClick={toggleMobileMenu}>
            Home
          </Button>
          <Button variant="none" size={"large"} onClick={toggleMobileMenu}>
            About
          </Button>
          <Button variant="none" size={"large"} onClick={toggleMobileMenu}>
            Services
          </Button>
          <Button variant="none" size={"large"} onClick={toggleMobileMenu}>
            Contact
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
