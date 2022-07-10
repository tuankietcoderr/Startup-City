import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/double_triangle.png" alt="double triangle" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/dot.png" alt="dot" />
        <div className="footer__left">
          <div className="footer__left-logo">
            <div>LOGO</div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right-content">
            <ul>
              <Link href="/" passHref>
                <li>
                  <a>
                    <span>Trang chủ</span>
                  </a>
                  <ul>
                    <li>
                      <Link href="/#thong-tin-quy-khoi-nghiep" passHref>
                        <a> Thông tin quỹ khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#cac-chuong-trinh-sap-toi" passHref>
                        <a>Các chương trình sắp tới</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </Link>
              <Link href="/gioi-thieu" passHref>
                <li>
                  <a>
                    <span>Giới thiệu</span>
                  </a>
                  <ul>
                    <li>
                      <Link href="/gioi-thieu/#ve-chung-toi" passHref>
                        <a>Về chúng tôi</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gioi-thieu/#so-do-to-chuc" passHref>
                        <a>Sơ đồ tổ chức</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gioi-thieu/#don-vi-dong-hanh" passHref>
                        <a>Đơn vị đồng hành</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gioi-thieu/#lien-ket-trong-nuoc" passHref>
                        <a>Liên kết trong nước</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gioi-thieu/#lien-ket-quoc-te" passHref>
                        <a>Liên kết quốc tế</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gioi-thieu/#cac-du-an-trien-khai" passHref>
                        <a>Các dự án triển khai</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </Link>
              <Link href="/khoi-nghiep" passHref>
                <li>
                  <a>
                    <span>Khởi nghiệp</span>
                  </a>
                  <ul>
                    <li>
                      <Link href="/khoi-nghiep/#thu-vien-khoi-nghiep" passHref>
                        <a>Thư viện khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoi-nghiep/#tam-guong-khoi-nghiep" passHref>
                        <a>Tấm gương khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoi-nghiep/#nhan-vat-cua-nam" passHref>
                        <a>Nhân vật của năm</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoi-nghiep/#hoc-bong-khoi-nghiep" passHref>
                        <a>Học bổng khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/khoi-nghiep/#dao-tao-tien-khoi-nghiep"
                        passHref
                      >
                        <a>Đào tạo tiền khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoi-nghiep/blog" passHref>
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoi-nghiep/#co-hoi-khoi-nghiep" passHref>
                        <a>Cơ hội khởi nghiệp</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </Link>
              <Link href="/thong-tin" passHref>
                <li>
                  <a>
                    <span>Thông tin</span>
                  </a>
                  <ul>
                    <li>
                      <Link href="/thong-tin/#cac-cuoc-thi" passHref>
                        <a>Các cuộc thi</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/thong-tin/#cac-du-an-dac-sac" passHref>
                        <a>Các dự án đặc sắc</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/thong-tin/#he-thong-chinh-sach" passHref>
                        <a>Hệ thống chính sách</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/thong-tin/#thong-tin-bao-chi" passHref>
                        <a>Thông tin báo chí</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/thong-tin/#co-hoi-khoi-nghiep" passHref>
                        <a>Cơ hội khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/thong-tin/#su-kien-khoi-nghiep" passHref>
                        <a>Sự kiện khởi nghiệp</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </Link>
              <Link href="/sinh-thai" passHref>
                <li>
                  <a>
                    <span>Sinh thái</span>
                  </a>
                  <ul>
                    <li>
                      <Link href="/sinh-thai/#khoi-co-quan-nha-nuoc" passHref>
                        <a>Khối cơ quan nhà nước</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sinh-thai/#khoi-don-vi-ho-tro" passHref>
                        <a>Khối đơn vị hỗ trợ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sinh-thai/#khoi-don-vi-dau-tu" passHref>
                        <a>Khối đơn vị đầu tư</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sinh-thai/#khoi-ngan-hang" passHref>
                        <a>Khối ngân hàng</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sinh-thai/#nhip-cau-co-hoi" passHref>
                        <a>Nhịp cầu cơ hội</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sinh-thai/#du-an-khoi-nghiep" passHref>
                        <a>Dự án khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sinh-thai/#nhom-khoi-nghiep-chuyen-de"
                        passHref
                      >
                        <a>Nhóm khởi nghiệp chuyên đề</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </Link>
              <Link href="/ho-tro" passHref>
                <li>
                  <a>
                    <span>Hỗ trợ</span>
                  </a>
                  <ul>
                    <li>
                      <Link href="/ho-tro/#su-kien-moi" passHref>
                        <a>Sự kiện mới</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ho-tro/#chuyen-de-khoi-nghiep" passHref>
                        <a>Chuyên đề khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ho-tro/#cong-dong-khoi-nghiep" passHref>
                        <a>Cộng đồng khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ho-tro/#ho-tro-tu-chuyen-gia" passHref>
                        <a>Hỗ trợ từ chuyên gia</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ho-tro/#tu-van-chien-luoc" passHref>
                        <a>Tư vấn chiến lược</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </Link>
              <Link href="/blog" passHref>
                <li>
                  <a>
                    <span>Blog</span>
                  </a>
                  <ul>
                    <li>
                      <Link href="/blog/#cong-dong-khoi-nghiep" passHref>
                        <a>Cộng đồng khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/#hop-tac-khoi" passHref>
                        <a>Hợp tác khởi</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/#dien-dan-khoi-nghiep" passHref>
                        <a>Diễn đàn khởi nghiệp</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ho-tro/#ket-noi-khoi-nghiep" passHref>
                        <a>Kết nối khởi nghiệp</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__contact">
        <div>
          <label htmlFor="contact">
            <div>Liên hệ</div>
          </label>
          <input type="email" placeholder="Nhập email của bạn" id="contact" />
          <button>Gửi</button>
        </div>
        <div className="footer__contact--icon">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Facebook size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={30} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Twitter size={30} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin size={30} />
          </a>
        </div>
      </div>
      <div style={{ textAlign: "center", fontStyle: "italic" }}>
        © Bản quyền thuộc về Thành phố khởi nghiệp
      </div>
    </>
  );
};

export default Footer;
