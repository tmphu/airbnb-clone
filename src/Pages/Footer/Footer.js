import React from "react";
import { Desktop, Mobile, Tablet } from "../../HOC/Responsive";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import FooterTablet from "./FooterTablet";

export default function Footer() {
  const footerArr = [
    {
      navTitle: "Giới thiệu",
      navList: [
        "Phương thức hoạt động của AirBnb",
        "Trang tin tức",
        "Nhà đầu tư",
        "AirBnb Plus",
        "AirBnb Luxe",
        "Hotel Tonight",
        "AirBnb For Work",
        "Nhờ có Host, mọi điều đều có thể",
        "Cơ hội nghề nghiệp",
        "Thư của nhà sáng lập",
      ],
    },
    {
      navTitle: "Cộng đồng",
      navList: [
        "Sự đa dạng và cảm giác thân thuộc",
        "Tiện nghi phù hợp cho người khuyết tật",
        "Đối tác liên kết AirBnb",
        "Chỗ ở cho tuyến đầu",
        "Lượt giới thiệu của khách",
        "AirBnb.org",
      ],
    },
    {
      navTitle: "Đón tiếp khách",
      navList: [
        "Cho thuê nhà",
        "Tổ chức trải nghiệm trực tuyến",
        "Tổ chức trải nghiệm",
        "Đón tiếp khách có trách nhiệm",
        "Trung tâm tài nguyên",
        "Trung tâm cộng đồng",
      ],
    },
    {
      navTitle: "Hỗ trợ",
      navList: [
        "Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi",
        "Trung tâm trợ giúp",
        "Các tùy chọn hủy",
        "Hỗ trợ khu dân cư",
        "Tin cậy và an toàn",
      ],
    },
  ];

  return (
    <div>
      <Desktop>
        <FooterDesktop footerArr={footerArr}></FooterDesktop>
      </Desktop>
      <Tablet>
        <FooterTablet footerArr={footerArr}></FooterTablet>
      </Tablet>
      <Mobile>
        <FooterMobile footerArr={footerArr}></FooterMobile>
      </Mobile>
    </div>
  );
}
