
import React, { useContext } from "react";
import { Button, Checkbox, Form, Input } from "antd";
// import {loginContext,loginInterface} from "../../../services/AuthContext";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../storeRedux/sliceInterface/Store";
import { loginAction } from "../../storeRedux/slice/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  // const username = useSelector((state:RootState) => state.userInfo.username)
  
  // what should be want to return define here
 const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn.isAuth)

  const onFinish = () => {
    // console.log("values", values);
    localStorage.setItem('isLoggedIn',JSON.stringify(true));
    dispatch(loginAction());
   navigate({pathname:"/"});
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="login"
    >
      <Form.Item
        label="Username"
        name="username"
        className="user-name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input className="userInput" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        className="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login