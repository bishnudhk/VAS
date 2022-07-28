import React, { useContext } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { loginContext,loginInterface } from '../../context/AuthContext';

import './login.css';
import { useNavigate } from 'react-router-dom';

const Login :React.FC = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(loginContext) as loginInterface;
  const navigate = useNavigate();
  console.log(isLoggedIn); 
    const onFinish = (values: string | number) => {
        console.log('Success:', values);  
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn","true" );
        navigate('/');

      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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
          className='login'
        >
          <Form.Item
            label="Username"
            name="username"
            className='user-name'
            
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className='userInput' />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            className='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
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