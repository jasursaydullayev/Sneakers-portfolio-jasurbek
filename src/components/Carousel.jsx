import ResponsiveModal from "./ResponsiveModal";
function Carousel() {
  return (
    <div>
      <div className="carousel class w-full">
        <div id="slide1" className="carousel-item relative  w-full">
          <img
            onClick={() => document.getElementById("my_modal_4").showModal()}
            src="/big-sneakers.jpg"
            className="w-full"
          />
          <ResponsiveModal />
          <div className="flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn  btn-circle left  carousel-control"
            >
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/first-sneakers.jpg"
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="w-full rounded-none"
          />
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
          <img
            src="/second-sneakers.jpg"
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="w-full"
          />
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
          <img
            src="/third-sneakers.jpg"
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="w-full"
          />
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
    </div>
  );
}

export default Carousel;
