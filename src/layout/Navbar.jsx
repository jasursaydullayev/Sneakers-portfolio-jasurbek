import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="nav-wrapper-1 pt-[28px] flex justify-between">
        <div className="items-wrapper flex gap-x-[56.5px]">
          <div className="drawer  w-[16px]">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer">
                <img
                  className="hidden cursor-pointer mt-[4px] h-[15px]"
                  src="/burger.svg"
                  alt=""
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay absolute"
              ></label>
              <ul className="menu p-[24px] w-[250px] min-h-full bg-white flex gap-[20px] text-[15px] leading-[26px] text-gray">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  to={"/"}
                  className="drawer-overlay"
                >
                  <img
                    className="mb-[33.73px]"
                    src="/x-image.svg"
                    width={13.44}
                    alt=""
                  />
                </label>
                <NavLink
                  to={"/"}
                  className="font-bold text-[18px] leading-[26px] text-block"
                >
                  Collection
                </NavLink>
                <NavLink
                  to={"/men"}
                  className="font-bold text-[18px] leading-[26px] text-block"
                >
                  Men
                </NavLink>
                <NavLink
                  to={"/women"}
                  className="font-bold text-[18px] leading-[26px] text-block"
                >
                  Women
                </NavLink>
                <NavLink
                  to={"/about"}
                  className="font-bold text-[18px] leading-[26px] text-block"
                >
                  About
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className="font-bold text-[18px] leading-[26px] text-block"
                >
                  Contact
                </NavLink>
              </ul>
            </div>
          </div>
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
          <img
            className="cursor-pointer h-[50px] avatar"
            src="/Avatar.svg"
            alt=""
          />
        </div>
      </div>
      <hr className="text-[#E4E9F2] nav-wrapper mb-[90px]" />
    </div>
  );
}

export default Navbar;
