import React from "react";
import { NavLink } from "react-router-dom";

function Drawer() {
  return (
    <div className="drawer z-[1]  w-[16px]">
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
  );
}

export default Drawer;
