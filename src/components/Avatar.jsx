function Avatar() {
  return (
    <div className="shop-wrapper flex items-center mt-[-35px] gap-x-[46.18px] ">
      <div className="dropdown">
        <div tabIndex={0} role="button">
          <img
            className="cursor-pointer relative h-[20px] w-[21.87px]"
            src="/Shop.svg"
            alt=""
          />
            <div className="badge absolute w-[19px] h-[13px] text-[10px] font-bold text-[#fff] bottom-[14px] left-[14px] bg-orange">0</div>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] rounded-lg card-compact bg-[#fff] w-[360px] h-[256px] pt-[14px] drop shadow ml-[-160px] mt-[19px]"
        >
          <div className="card-body">
            <h3 className="font-bold text-[16px] leading-[19.84px] mb-[27px] text-block">
              Card
            </h3>
            <hr className="text-[#E4E9F2] w-[360px] mb-[47px] ml-[-16px]" />
            <h3 className="font-bold text-[16px] leading-[26px] text-gray text-center ">
              Your cart is empty.
            </h3>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Avatar;
