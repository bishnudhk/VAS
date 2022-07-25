import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

import './login.css';

const Login :React.FC = () => {
    const onFinish = (values: string | number) => {
        console.log('Success:', values);
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
            className='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
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