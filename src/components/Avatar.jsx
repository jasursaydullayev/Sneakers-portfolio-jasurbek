import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/features/cartSlice";
function Avatar() {
  const dispatch = useDispatch();
  const { amount, price } = useSelector((store) => store.cart);
  return (
    <div className="shop-wrapper flex items-center mt-[-35px] gap-x-[46.18px] ">
      <div className="dropdown">
        <div tabIndex={0} role="button">
          <img
            className="cursor-pointer relative h-[20px] w-[21.87px]"
            src="/Shop.svg"
            alt=""
          />
          {amount > 0 ? (
            <div className="badge absolute w-[19px] h-[13px] text-[10px] font-bold text-[#fff] bottom-[14px] left-[14px] bg-orange">
              {amount}
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] rounded-lg card-compact bg-[#fff] w-[360px] h-[216px] pt-[4px] drop shadow ml-[-160px] mt-[19px]"
        >
          <div className="card-body">
            <h3 className="font-bold text-[16px] leading-[19.84px] mb-[7px] text-block">
              Card
            </h3>
            <hr className="text-[#E4E9F2] modal-hr w-[360px] mb-[47px] ml-[-16px]" />
            <h3 className="font-bold text-[16px] leading-[26px] text-gray text-center ">
              {amount == 0 ? "Your cart is empty" : ""}
            </h3>
            {amount > 0 ? (
              <>
                {" "}
                <div className="flex gap-x-[16px] mt-[-47px]  justify-between mb-[14px] items-center">
                  <img
                    className="rounded"
                    src="/big-sneakers.jpg"
                    alt=""
                    width={50}
                  />
                  <div className="text-[16px] leading-[26px] text-gray">
                    <p>Fall Limited Edition Sneakers</p>
                    <div className="flex">
                      <p className="flex gap-[6px]">
                        ${price}.00 x {amount}
                        <span className="font-bold text-block">
                          ${price * amount}.00
                        </span>
                      </p>
                    </div>
                  </div>
                  <img
                    onClick={() => dispatch(removeItem())}
                    className="cursor-pointer"
                    src="/delete.svg"
                    alt=""
                    width={14}
                    height={16}
                  />
                </div>
                <button className="w-[312px] bg-orange font-bold text-[16px] leading-[19.84px] text-white text-center pt-[14px] pb-[16px] rounded-2xl ">
                  Checkout
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <img
        className="cursor-pointer h-[50px] avatar"
        src="/Avatar.svg"
        alt=""
      />
    </div>
  );
}

export default Avatar;
