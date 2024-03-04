import { useState } from "react";
const linkImages = [
  "/big-sneakers.jpg",
  "/first-sneakers.jpg",
  "/second-sneakers.jpg",
  "/third-sneakers.jpg",
];
console.log(linkImages[0]);
const allImages = [
  {
    width: "88",
  },
  {
    width: "88",
  },
  {
    width: "88",
  },
  {
    width: "88",
  },
];

function Sneakers() {
  const [image, setImage] = useState(0);

  const handleActive = (i) => {
    setImage(i);
  };
  return (
    <div>
      <div className="carousel class w-full">
        <div id="slide1" className="carousel-item relative  w-full">
          <img src="/big-sneakers.jpg" className="w-full" />
          <div className="flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn  btn-circle left  carousel-control">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/first-sneakers.jpg" className="w-full rounded-none" />
          <div className=" flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative  w-full">
          <img src="/second-sneakers.jpg" className="w-full" />
          <div className=" flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative  w-full">
          <img src="/third-sneakers.jpg" className="w-full" />
          <div className=" flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="mleft-48 ml-[48px]">
        <div className="container  sneakers-wrapper flex gap-[125px] pb-[52px]">
          <div className="hidden-images">
            <img
              className="mb-[32px] rounded-2xl h-[445px] w-[445px]"
              src={linkImages[image]}
              alt=""
            />
            <div className="flex gap-[31px]">
              {allImages.map((oneimage, index) => {
                const { width } = oneimage;
                return (
                  <div
                    key={index}
                    className={`w-[88px] cursor-pointer h-[88px]  rounded-[14px] ${
                      index == image ? "border-2 border-orange" : ""
                    }`}
                  >
                    <img
                      onClick={() => handleActive(index)}
                      className={`rounded-[12px] ${
                        index == image ? "opacity-35" : ""
                      }`}
                      src={linkImages[index]}
                      alt=""
                      width={width}
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="font-bold text-[17px] leading-[16.12px] tracking-[2px] text-orange mb-[27px] sneaker-company">
              Sneaker Company
            </p>
            <h1 className="font-bold w-[445px] fall  mb-[32px] text-[44px] leading-[48px] text-block">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-[16px] fall-text leading-[26px] text-gray w-[445px] mb-[24px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
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
                <button className="font-bold text-orange text-2xl">-</button>
                <p className="font-bold text-block mt-[5px]">0</p>
                <button className="font-bold text-orange text-2xl">+</button>
              </div>
              <div className="plus cursor-pointer first-btns bg-orange w-[272px] h-[56px] items-center justify-center gap-[15.54px] flex rounded-xl text-white">
                <img src="/ShopWhite.svg" alt="" width={17.46} height={16} />
                <p className="font-bold text-[16px]">Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sneakers;
