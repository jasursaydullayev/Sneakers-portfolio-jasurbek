import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="nav-wrapper-1 pt-[28px] flex justify-between">
        <div className="items-wrapper flex gap-x-[56.5px]">
        <img className="hidden cursor-pointer mt-[4px] h-[15px]" src="/burger.svg" alt="" />
          <NavLink to={"/"}>
            <img src="/sneakers-logo.svg" alt="" />
          </NavLink>
          <div>
            <ul className="items flex gap-[32px] text-[15px] leading-[26px] text-gray">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "border-b-[4px] pb-[37px] border-orange" : ""
                }
              >
                Collections
              </NavLink>
              <NavLink
                to={"/men"}
                className={({ isActive }) =>
                  isActive ? "border-b-[4px] pb-[37px] border-orange" : ""
                }
              >
                Men
              </NavLink>
              <NavLink
                to={"/women"}
                className={({ isActive }) =>
                  isActive ? "border-b-[4px] pb-[37px] border-orange" : ""
                }
              >
                Women
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "border-b-[4px] pb-[37px] border-orange" : ""
                }
              >
                About
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "border-b-[4px] pb-[37px] border-orange" : ""
                }
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="shop-wrapper flex items-center mt-[-35px] gap-x-[46.18px] ">
          <img
            className="cursor-pointer h-[20px] w-[21.87px]"
            src="/Shop.svg"
            alt=""
          />
          <img className="cursor-pointer h-[50px] avatar" src="/Avatar.svg" alt="" />
        </div>
      </div>
      <hr className="text-[#E4E9F2] nav-wrapper mb-[90px]" />
    </div>
  );
}

export default Navbar;
