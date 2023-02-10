import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { houseService } from "../../services/houseService";
import { houseOwner } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShieldAlt,
  faAward,
  faCalendarAlt,
  faStar,
  faShareSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Comment from "../../Component/Comment/Comment";
import TestPicker from "../../Component/Input/DatePicker";
import { useSelector } from "react-redux";

export default function DetailPage() {
  let userInfo = useSelector((state) => state.userReducer.userInfo);
  let { id } = useParams();
  let navigate = useNavigate();
  const [house, setHouse] = React.useState({});
  const [houseComment, setHouseComment] = React.useState([]);

  useEffect(() => {
    houseService
      .getHouseById(id)
      .then((res) => {
        setHouse(res.data.content);
      })
      .catch((err) => {
        console.log("getHouseById error", err);
      });
    houseService
      .getCommentByHouseId(id)
      .then((res) => {
        setHouseComment(res.data.content);
      })
      .catch((err) => {
        console.log("getComment error", err);
      });
  }, [id]);

  const bookHouse = (startDate, endDate, guestNo, userId) => {
    const data = {
      maPhong: parseInt(id),
      ngayDen: startDate,
      ngayDi: endDate,
      soLuongKhach: guestNo,
      maNguoiDung: userId,
    };
    // console.log("bookHouse data", data);

    houseService
      .bookHouse(data)
      .then((res) => {
        setTimeout(() => {
          navigate("/my-profile");
        }, 1000);
      })
      .catch((err) => {
        console.log("bookHouse error", err);
      });
  };

  const renderHouseComment = () => {
    return houseComment.map((item, index) => {
      return <Comment commentObj={item} key={index} />;
    });
  };

  return (
    <div className="container mx-auto p-10">
      <div id="house__header" className="grid grid-rows-2 grid-cols-3">
        <h3 className="mb-2 text-xl font-bold text-gray-900 col-span-2">
          {house.tenPhong}
        </h3>
        <p className="col-span-2">
          <span className="text-pink-500 pr-1">
            <FontAwesomeIcon icon={faStar} />
          </span>
          4,83 &#40;16 đánh giá&#41; - Chủ nhà siêu cấp
        </p>
        <div className="flex flex-row gap-4 justify-end">
          <p>
            <FontAwesomeIcon icon={faShareSquare} />{" "}
            <span className="underline font-bold">Chia sẻ</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faHeart} />{" "}
            <span className="underline font-bold">Lưu</span>
          </p>
        </div>
      </div>
      <img src={house.hinhAnh} alt="" className="w-full" />
      <div className="grid grid-cols-3 grid-rows-2 pt-8 gap-x-20 gap-y-4">
        <div id="house__detail" className="col-span-2">
          <div id="house__name" className="flex flex-row gap-6 pb-6">
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                Toàn bộ căn hộ condo
              </h3>
              <p>
                {house.khach} khách - {house.phongNgu} phòng ngủ -{" "}
                {house.giuong} giường - {house.phongTam} phòng tắm
              </p>
            </div>
            <img
              src={houseOwner}
              alt=""
              style={{ width: "60px", height: "60px", borderRadius: "30px" }}
            />
          </div>
          <hr />
          <div id="house__feature" className="flex flex-col gap-4 py-6">
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon icon={faHome} className="pt-1" />
              <div>
                <p className="text-md">Toàn bộ nhà</p>
                <p className="text-gray-400">
                  Bạn sẽ có chung cư cao cấp cho riêng mình
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon icon={faShieldAlt} className="pt-1" />
              <div>
                <p className="text-md">Vệ sinh tăng cường</p>
                <p className="text-gray-400">
                  Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường
                  5 bước của Airbnb.{" "}
                  <span className="font-bold underline">Tìm hiểu thêm</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon icon={faAward} className="pt-1" />
              <div>
                <p className="text-md">Phong là Chủ nhà siêu cấp</p>
                <p className="text-gray-400">
                  Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh
                  giá cao và là những người cam kết mang lại quãng thời gian
                  tuyệt vời cho khách.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="pt-1" />
              <div>
                <p className="text-md">Miễn phí hủy trong 48 giờ</p>
              </div>
            </div>
          </div>
          <hr />
          <div id="house__desc" className="py-6">
            {house.moTa}
          </div>
          <hr />
          <div
            id="house__facility"
            className="grid grid-cols-2 grid-rows-5 pt-6"
          >
            <h3 className="text-xl col-span-2 pb-3">Tiện nghi</h3>
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon icon={faHome} />
              <p>Bếp</p>
            </div>
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon icon={faHome} />
              <p>Wifi</p>
            </div>
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon icon={faHome} />
              <p>TV</p>
            </div>
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon icon={faHome} />
              <p>Thang máy</p>
            </div>
          </div>
        </div>
        <div id="house__checkout">
          <div className="shadow-xl">
            <div className="container p-6 py-4">
              <div className="flex flex-row justify-between py-3">
                <p>${house.giaTien} / đêm</p>
                <p>
                  <span className="text-pink-500 pr-1">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  4.83 <span className="underline">&#40;16 đánh giá&#41;</span>
                </p>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 border-2 mb-3">
                <div>NHẬN PHÒNG</div>
                <div>TRẢ PHÒNG</div>
                <div className="col-span-2">KHÁCH</div>
              </div>
              <div
                className="bg-pink-500 px-6 py-2 rounded-md text-white text-center font-bold cursor-pointer mb-3"
                onClick={() =>
                  bookHouse("2023-02-07", "2023-02-07", 1, userInfo.user.id)
                }
              >
                Đặt phòng
              </div>
              <div className="text-center mb-3">Bạn vẫn chưa bị trừ tiền</div>
              <div>Tổng $44</div>
            </div>
          </div>
        </div>
        <div id="house__review" className="col-span-3">
          <div className="grid grid-rows-2 grid-cols-2 gap-x-20 gap-y-4">
            {renderHouseComment()}
          </div>
          <textarea
            name=""
            id="message"
            rows="5"
            placeholder="Nhập comment..."
            className="block w-full border-2 border-gray-300 p-2 rounded-lg mb-4"
          ></textarea>
          <button className="bg-blue-500 text-white p-3">Add comment</button>
          <TestPicker />
        </div>
      </div>
    </div>
  );
}
