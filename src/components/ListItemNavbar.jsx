function ListItemNavbar() {
  return (
    <ul className="items flex gap-[32px] text-[15px] leading-[26px] text-gray">
      <li className="hover:border-b-[4px] pb-[33px] hover:border-orange cursor-pointer">
        Collections
      </li>
      <li className="hover:border-b-[4px] pb-[33px] hover:border-orange cursor-pointer">
        Men
      </li>
      <li className="hover:border-b-[4px] pb-[33px] hover:border-orange cursor-pointer">
        Women
      </li>
      <li className="hover:border-b-[4px] pb-[33px] hover:border-orange cursor-pointer">
        About
      </li>
      <li className="hover:border-b-[4px] pb-[33px] hover:border-orange cursor-pointer">
        Contact
      </li>
      <li className="pb-[37px] invisible">Hello</li>
    </ul>
  );
}

export default ListItemNavbar;
