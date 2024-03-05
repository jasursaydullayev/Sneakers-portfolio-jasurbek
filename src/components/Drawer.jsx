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
            className="drawer-overlay mb-[23px] w-[13.44px] h-[13.44px]"
          >
            <img src="/x-image.svg" width={13.44} alt="" />
          </label>
          <li className="font-bold text-[18px] leading-[26px] text-block">
            Collection
          </li>
          <li className="font-bold text-[18px] leading-[26px] text-block">
            Men
          </li>
          <li className="font-bold text-[18px] leading-[26px] text-block">
            Women
          </li>
          <li className="font-bold text-[18px] leading-[26px] text-block">
            About
          </li>
          <li className="font-bold text-[18px] leading-[26px] text-block">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
