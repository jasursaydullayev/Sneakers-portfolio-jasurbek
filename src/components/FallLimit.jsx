import { useDispatch, useSelector } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
  updateamount
} from "../redux/features/cartSlice";
import { useState } from "react";
function FallLimit() {
  const dispatch = useDispatch();
  const { amount, amountbtn } = useSelector((store) => store.cart);
  return (
    <div>
      <p className="font-bold text-[17px] mt-[52px] leading-[16.12px] tracking-[2px] text-orange mb-[27px] sneaker-company">
        Sneaker Company
      </p>
      <h1 className="font-bold w-[445px] fall  mb-[32px] text-[44px] leading-[48px] text-block">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-[16px] fall-text leading-[26px] text-gray w-[445px] mb-[24px]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mobile-flex">
        <div className="flex gap-[16px] items-center mb-[10px]">
          <h3 className="font-bold text-[28px] leading-[34.73px] text-block">
            $125.00
          </h3>
          <button className="border-0 w-[51px] h-[27px] bg-[#FFEEE2] text-orange rounded font-bold text-16px cursor-auto">
            50%
          </button>
        </div>
        <h3 className="line-through dollar text-[16px] leading-[26px] text-cost-grey mb-[32px]">
          $250.00
        </h3>
      </div>
      <div className="flex gap-[16px] btns-wrapper items-center">
        <div className="w-[157px] h-[56px] first-btns rounded-xl bg-[#F6F8FD] flex justify-between items-center px-[24px]">
          <button
            onClick={() => {
              if (amountbtn >= 1) {
                dispatch(decrementProduct());
              }
            }}
            className="font-bold text-orange text-2xl"
          >
            -
          </button>
          <p className="font-bold text-block mt-[5px]">
            {amountbtn > 0 ? amountbtn : 0}
          </p>
          <button
            onClick={() => dispatch(incrementProduct())}
            className="font-bold text-orange text-2xl"
          >
            +
          </button>
        </div>
        <div onClick={() => dispatch(updateamount())} className="plus cursor-pointer first-btns bg-orange w-[272px] h-[56px] items-center justify-center gap-[15.54px] flex rounded-xl text-white">
          <img src="/ShopWhite.svg" alt="" width={17.46} height={16} />
          <p className="font-bold text-[16px]">Add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default FallLimit;
