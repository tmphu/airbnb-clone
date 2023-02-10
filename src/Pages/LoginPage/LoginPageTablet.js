import { Button, Form, Input, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../../redux/reducers/userReducer";
import { userLocalService } from "../../services/localStorageService";
import { userService } from "../../services/userService";
import { login } from "../../assets";

export default function LoginPageTablet() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (dataUser) => {
    userService
      .postLogin(dataUser)
      .then((res) => {
        dispatch(setUserInfo(res.data.content));
        console.log("LoginPage - dispatch(setUserInfo): ", res);
        // success message
        message.success("Đăng nhập thành công!");
        // save local storage
        userLocalService.setItem(res.data.content);
        setTimeout(() => {
          if (res.data.content.maLoaiNguoiDung === "QuanTri") {
            // use navigate to avoid page reloading
            // if admin, to directly to admin page
            navigate("/admin/user");
          } else {
            // if not, go to home page
            navigate("/");
          }
        });
      }, 1000)
      .catch((err) => {
        console.log(err);
        // failure message
        message.error(
          "Thông tin đăng nhập không đúng, vui lòng kiểm tra lại username/password"
        );
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("onFinishFailed: ", errorInfo);
  };

  return (
    <div className="h-screen flex mx-auto">
      <div className="container m-10 flex">
        <div className="h-full w-2/4">
          <img src={login} alt="" />
        </div>
        <div className="h-full w-2/4 pt-10">
          {/* form */}
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            // onFinish={onFinishReduxThunk}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Tài Khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật Khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 24,
              }}
              className="text-center"
            >
              <Button
                className="bg-indigo-700 text-base font-semibold tracking-wider w-full mx-auto px-5 py-5 flex justify-center items-center rounded text-white shadow hover:shadow-xl transition duration-500 hover:bg-indigo-900"
                htmlType="submit"
              >
                ĐĂNG NHẬP
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
