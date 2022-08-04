import React from 'react'
import { Button,  Form, Input, DatePicker,
    Select,TimePicker,Radio,InputNumber } from 'antd';
import moment from 'moment';


const { RangePicker } = DatePicker;
const { Option } = Select;

const VaccineAppointmentForm = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div>
        <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Service Name"
        name="serviceName"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='Service Name' />
      </Form.Item>

      <Form.Item
        label="Site Location"
        name="siteLocation"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='Site Location' />
      </Form.Item>

      <Form.Item label="Date"
      name="date"
      rules={[{ required: true, message: 'Please input your username!' }]}
      >
          <RangePicker />
        </Form.Item>

        <Form.Item label="DoseType"
        name="doseType"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Select
          showSearch
          placeholder="Select Dose Type">
            <Option value="demo">Single Dose</Option>
            <Option value="demo">Multiple Dose</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Duration"
          name="duration"
          rules={[{ required: true, message: "Please input duration!" }]}
        >
          <TimePicker defaultOpenValue={moment("00:00:00", "HH:mm:ss")} />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input your age!" }]}
        >
          <InputNumber max={120} min={0} placeholder="Age" />
        </Form.Item>
        <Form.Item
          label="Ethinicity"
          name="ethinicity"
          rules={[{ required: true, message: "Please input your ethinicity!" }]}
        >
          <Input placeholder="Ethinicity" />
        </Form.Item>
      
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add Vacine Appointment
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default VaccineAppointmentForm