import Link from "next/link";
import MultiCarousel from "../Layout/Carousel";

const MainPage = () => {
  return (
    <>
      <div className="main">
        <div className="main__thumbnail">
          <h1>
            Thành phố khởi nghiệp, thành phố khởi nghiệp, thành phố khởi nghiệp
          </h1>
          <h2>
            Thành phố khởi nghiệp, thành phố khởi nghiệp, thành phố khởi
            nghiệp,thành phố khởi nghiệp, thành phố khởi nghiệp,
          </h2>
          <Link href="/#thong-tin-quy-khoi-nghiep">
            <a>
              <button className="btn btn-primary main__button">
                Khám phá ngay
              </button>
            </a>
          </Link>
        </div>
        <div className="main__content">
          <div className="main__content-quy-khoi-nghiep">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wave.png" alt="wave" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wave.png" alt="wave" />
            <h1 id="thong-tin-quy-khoi-nghiep">Thông tin quỹ khởi nghiệp</h1>
            <p>
              Thông tin quỹ khởi nghiệp, thông tin quỹ khởi nghiệp, thông tin
              quỹ khởi nghiệp, thông tin quỹ khởi nghiệp, thông tin quỹ khởi
              nghiệp, thông tin quỹ khởi nghiệp, thông tin quỹ khởi nghiệp,
              thông tin quỹ khởi nghiệp, thông tin quỹ khởi nghiệp, thông tin
              quỹ khởi nghiệp, thông tin quỹ khởi nghiệp,
            </p>
          </div>
          <div className="main__content-cac-chuong-trinh">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/star.png" alt="star" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/star.png" alt="star" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/rain.png" alt="rain" />
            <h1 id="cac-chuong-trinh-sap-toi">Các chương trình sắp tới</h1>
            <MultiCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
