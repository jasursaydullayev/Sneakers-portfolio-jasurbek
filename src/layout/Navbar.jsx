import ListItemNavbar from "../components/ListItemNavbar";
import Avatar from "../components/Avatar";
import Drawer from "../components/Drawer";

function Navbar() {
  return (
    <div className="container">
      <div className="nav-wrapper-1 pt-[28px] flex justify-between">
        <div className="items-wrapper flex gap-x-[56.5px]">
          <div className="draver-and-snak">
            <Drawer /> <img className="cursor-pointer" src="/sneakers-logo.svg" alt="" />
          </div>
          <div>
            <ListItemNavbar />
          </div>
        </div>
        <Avatar />
      </div>
      <hr className="text-[#E4E9F2] nav-wrapper mb-[90px]" />
    </div>
  );
}

export default Navbar;
