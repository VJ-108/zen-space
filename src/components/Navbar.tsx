import Button from "./ui/Button";

const Navbar = () => {
  return (
    <nav className="border-b-[3px] border-white rounded-full p-4 flex items-center justify-between shadow-lg">
      <div className="text-white font-bold text-2xl font-heading px-2 cursor-pointer">
        Zen-Space
      </div>
      <div className="flex space-x-4">
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
    </nav>
  );
};

export default Navbar;
