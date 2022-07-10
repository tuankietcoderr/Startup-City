import React from "react";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__thumbnail">
          <div className="about__thumbnail-card">
            <div className="about__thumbnail-card-item">
              <h1>+10.000</h1>
              <p>Cuộc họp được đặt mỗi ngày</p>
            </div>
            <div className="about__thumbnail-card-item">
              <h1>+30</h1>
              <p>Quốc gia</p>
            </div>
          </div>
        </div>
        <div className="about__content">
          <div className="about__content--about">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/boom.png" alt="boom" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/plusx3.png" alt="plusx3" />
            <h1 id="ve-chung-toi">Về chúng tôi</h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/startup.png" alt="startup" />
              </div>
            </div>
          </div>
          <div className="about__content--organization">
            <h1 id="so-do-to-chuc">Sơ đồ tổ chức</h1>
            <div>{/* * @ hình ảnh sơ đồ */}</div>
          </div>
          <div className="about__content--coop">
            <h1 id="don-vi-dong-hanh">Đơn vị đồng hành</h1>
            <div>{/* * @ hình ảnh đơn vị đồng hành */}</div>
          </div>
          <div className="about__content--national-link">
            <h1 id="lien-ket-trong-nuoc">Liên kết trong nước</h1>
            <div>{/* * @ hình ảnh liên kết trong nước */}</div>
          </div>
          <div className="about__content--international-link">
            <h1 id="lien-ket-quoc-te">Liên kết quốc tế</h1>
            <div>{/* * @ hình ảnh liên kết quốc tế */}</div>
          </div>
          <div className="about__content--projects">
            <h1 id="cac-du-an-trien-khai">Các dự án triển khai</h1>
            <div>{/* * @ hình ảnh các dự án triển khai */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
