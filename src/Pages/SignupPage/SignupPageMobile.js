import React from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userService } from "../../services/userService";
import { setUserRegisterInfo } from "../../redux/reducers/userReducer";

export default function SignupPageMobile() {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  // main part
  const [form] = Form.useForm();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (dataUser) => {
    // console.log('Received values of form: ', dataUser);
    userService
      .postSignup(dataUser)
      .then((res) => {
        console.log("SignupPage - New register: ", res);
        dispatch(setUserRegisterInfo(res.data.content));
        message.success(
          "Tạo tài khoản thành công! Vui lòng đăng nhập bằng tài khoản vừa tạo"
        );
        setTimeout(() => {
          navigate("/login");
        });
      }, 1000)
      .catch((err) => {
        console.log(err);
        message.error("Đăng ký thất bại!");
      });
  };
  const handleRenderSignupForm = () => {
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        label="DANG KY"
        onFinish={onFinish}
        initialValues={{}}
        scrollToFirstError
      >
        <Form.Item>
          <div className="text-4xl font-semibold tracking-wider mx-auto pb-5 flex flex-nowrap justify-center  text-indigo-900">
            SIGN UP
          </div>
        </Form.Item>

        <Form.Item
          name="taiKhoan"
          label="Tài Khoản"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào tài khoản muốn tạo!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="matKhau"
          label="Mật Khẩu"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Nhập lại Mật Khẩu"
          dependencies={["matKhau"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Vui lòng nhập lại mật khẩu!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("matKhau") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu nhập lại chưa trùng khớp!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="hoTen"
          label="Họ Tên"
          // tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ tên!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "Email không đúng định dạng!",
            },
            {
              required: true,
              message: "Vui lòng nhập địa chỉ email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="soDt"
          label="Số Điện Thoại"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số điện thoại!",
              whitespace: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            className="bg-indigo-700 text-base font-semibold tracking-wider w-full mx-auto px-5 py-5 flex justify-center items-center rounded text-white shadow hover:shadow-xl transition duration-500 hover:bg-indigo-900"
            htmlType="submit"
          >
            ĐĂNG KÝ
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <div className="bg-white">
      <div
        className="mx-auto bg-indigo-100 shadow-2xl"
        style={{ width: "100%", padding: "60px 60px 60px 30px" }}
      >
        <>{handleRenderSignupForm()}</>
      </div>
    </div>
  );
}
