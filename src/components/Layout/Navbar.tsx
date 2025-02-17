import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  return (
    <nav className="bg-mainBlue fixed w-full h-16 z-50">
      <TopNavbar />
      <SideNavbar />
    </nav>
  );
};

export default Navbar;
