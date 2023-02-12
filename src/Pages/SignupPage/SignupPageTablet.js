import React from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userService } from "../../services/userService";
import { setUserRegisterInfo } from "../../redux/reducers/userReducer";

export default function SignupPageTablet() {
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

  const [form] = Form.useForm();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (dataUser) => {
    userService
      .postSignup({ ...dataUser, role: "USER" })
      .then((res) => {
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
          <div className="text-4xl font-semibold tracking-wider mx-auto pb-5 flex flex-nowrap justify-center pl-40 text-indigo-900">
            ĐĂNG KÝ TÀI KHOẢN
          </div>
        </Form.Item>

        <Form.Item
          name="name"
          label="Họ Tên"
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
          name="password"
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
          name="confirmPassword"
          label="Nhập lại Mật Khẩu"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Vui lòng nhập lại mật khẩu!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
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
          name="phone"
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

        <Form.Item
          name="birthday"
          label="Ngày sinh"
          rules={[
            {
              required: false,
              message: "Nhập ngày sinh",
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
        style={{
          width: "80%",
          padding: "60px 60px 60px 30px",
          marginTop: "90px",
        }}
      >
        <>{handleRenderSignupForm()}</>
      </div>
    </div>
  );
}
