import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={props?.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 1"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props?.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {/* @map Cac chuong trinh sap toi */}
      <div className="main__content-cac-chuong-trinh--carousel-item">
        <h2>Chương trình 1</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          nihil odio, eveniet laboriosam quisquam mollitia minus veritatis
          perspiciatis, porro deleniti ullam. Vero placeat commodi dignissimos
          iure ut odio delectus quis.
        </p>
      </div>
      <div className="main__content-cac-chuong-trinh--carousel-item">
        <h2>Chương trình 2</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          nihil odio, eveniet laboriosam quisquam mollitia minus veritatis
          perspiciatis, porro deleniti ullam. Vero placeat commodi dignissimos
          iure ut odio delectus quis.
        </p>
      </div>
      <div className="main__content-cac-chuong-trinh--carousel-item">
        <h2>Chương trình 3</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          nihil odio, eveniet laboriosam quisquam mollitia minus veritatis
          perspiciatis, porro deleniti ullam. Vero placeat commodi dignissimos
          iure ut odio delectus quis.
        </p>
      </div>
      <div className="main__content-cac-chuong-trinh--carousel-item">
        <h2>Chương trình 4</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          nihil odio, eveniet laboriosam quisquam mollitia minus veritatis
          perspiciatis, porro deleniti ullam. Vero placeat commodi dignissimos
          iure ut odio delectus quis.
        </p>
      </div>
    </Carousel>
  );
};

export default MultiCarousel;
