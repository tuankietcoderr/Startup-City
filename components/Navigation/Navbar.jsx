import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  useEffect(() => {
    const selector = document.querySelectorAll("nav > ul > li > a");
    const path = router.pathname.split("/");
    if (router.isReady) {
      console.log(router);
      if (path.includes("khoi-nghiep") && path.includes("blog")) {
        path.pop();
      }
      selector.forEach((item) => {
        if (path.includes(item.className)) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  }, [router.isReady, router.pathname, router]);

  return (
    <nav>
      <div>
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
      <ul>
        <Link href="/" passHref>
          <li>
            <a className="trang-chu">
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
            <a className="gioi-thieu">Giới thiệu</a>
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
            <a className="khoi-nghiep">Khởi nghiệp</a>
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
                <Link href="/khoi-nghiep/#dao-tao-tien-khoi-nghiep" passHref>
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
            <a className="thong-tin">Thông tin</a>
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
            <a className="sinh-thai">Sinh thái</a>
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
                <Link href="/sinh-thai/#nhom-khoi-nghiep-chuyen-de" passHref>
                  <a>Nhóm khởi nghiệp chuyên đề</a>
                </Link>
              </li>
            </ul>
          </li>
        </Link>
        <Link href="/ho-tro" passHref>
          <li>
            <a className="ho-tro">Hỗ trợ</a>
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
            <a className="blog">Blog</a>
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
    </nav>
  );
};

export default Navbar;
