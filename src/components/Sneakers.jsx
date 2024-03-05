import { useState } from "react";
import Carousel from './Carousel'
import FallLimit from "./FallLimit";
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
     <Carousel />
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
        <FallLimit />
        </div>
      </div>
    </div>
  );
}

export default Sneakers;
