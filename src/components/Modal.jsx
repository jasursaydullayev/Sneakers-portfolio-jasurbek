import { useState } from "react";
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

function Modal() {
  const handleActive = (i) => {
    setImage(i);
  };
  const [image, setImage] = useState(0);
  return (
    <div>
      <dialog id="my_modal_3" className="modal liner-modal pt-[60px]">
        <div className="flex flex-col items-end gap-[24px]">
          <form className="x" method="dialog">
            <button>
              <img src="/x-white.svg" alt="" width={20} />
            </button>
          </form>
          <div>
            <img
              className="mb-[32px] modal-img rounded-xl h-[480px] w-[500px]"
              src={linkImages[image]}
              alt=""
            />
            <div className="flex small-imgs gap-[31px] ml-[30px]">
              {allImages.map((oneimage, index) => {
                const { width } = oneimage;
                return (
                  <div
                    key={index}
                    className={`w-[88px] small-img cursor-pointer h-[88px]  rounded-[14px] ${
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
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
