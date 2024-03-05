import { NavLink } from "react-router-dom";

function ListItemNavbar() {
  return (
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
  );
}

export default ListItemNavbar;
