import React, { useEffect } from "react";
import { Form, Input, Button, Radio, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../redux/loadersSlice";
import { getAntdInputValidation } from "../../utils/helpers";

function Login() {
  const [type, setType] = React.useState("donar");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(SetLoading(true));
      const response = await LoginUser({
        ...values,
        userType: type,
      });
      dispatch(SetLoading(false));
      if(response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        navigate("/")
      } else {
        throw new Error (response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/")
    }
  }, [])

  return (
    <div className="bg-custom-image flex h-screen items-center justify-center">
      <Form
        layout="vertical"
        className="login-form grid gap-5 w-1/3"
        onFinish={onFinish}
      >
        <h1 className="uppercase text-2xl">
          <span className="text-primary">
            {type.toUpperCase()} - Login
          </span>
          <hr />
        </h1>

        <Radio.Group
          onChange={(e) => setType(e.target.value)}
          value={type}
          className=""
        >
          <Radio value="donar">Donar</Radio>
          <Radio value="hospital">Hospital</Radio>
          <Radio value="organization">Organization</Radio>
        </Radio.Group>

        <Form.Item label="Email" name="email" rules={getAntdInputValidation()}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={getAntdInputValidation()}>
          <Input type="password" />
        </Form.Item>

        <Button type="primary" block className="" htmlType="submit">
          Login
        </Button>

        <Link to="/register" className="text-center text-teal-700">
          Don't have an account? Register
        </Link>
      </Form>
    </div>
  );
}

export default Login;
