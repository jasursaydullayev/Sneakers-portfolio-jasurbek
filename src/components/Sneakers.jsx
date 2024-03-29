import { useState } from "react";
import Carousel from "./Carousel";
import FallLimit from "./FallLimit";
import Modal from "./Modal";

const linkImages = [
  "/big-sneakers.jpg",
  "/first-sneakers.jpg",
  "/second-sneakers.jpg",
  "/third-sneakers.jpg",
];
const allImages = [
  { width: "88" },
  { width: "88" },
  { width: "88" },
  { width: "88" },
];

function Sneakers() {
  const [image, setImage] = useState(0);

  const handleActive = (i) => {
    setImage(i);
  };
  return (
    <div>
      <Carousel />
      <div className="mleft-48 ml-[48px]">
        <div className="container sneakers-wrapper flex gap-[125px] pb-[52px]">
          <div className="hidden-images">
            <img
              onClick={() => document.querySelector("#my_modal_3").showModal()}
              className="mb-[32px] cursor-pointer rounded-2xl h-[445px] w-full max-w-[445px]"
              src={linkImages[image]}
              alt=""
              height={445}
            />
            <Modal />
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
          <FallLimit />
        </div>
      </div>
    </div>
  );
}

export default Sneakers;
