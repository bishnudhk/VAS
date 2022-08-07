import React from 'react'
import { Button, Form, Input, DatePicker,
  Select,TimePicker,Radio,InputNumber } from 'antd';

  const { Option } = Select;

const AddVaccineAppointmentForm = () => {

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
        label="Patient Id"
        name="PatientId"
        rules={[{ required: true, message: 'Please input Patient Id!' }]}
      >
        <Input placeholder='Patient Id' />
      </Form.Item>

      <Form.Item label="Site Location"
        name="siteLocation"
        rules={[{ required: true, message: 'Please input your Location!' }]}>
          <Select
          showSearch
          placeholder="Select Your Location">
            <Option value="Kathmandu">Kathmandu</Option>
            <Option value="lalitpur">Lalitpur</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Service Type"
        name="serviceType"
        rules={[{ required: true, message: 'Please input your Service Type!' }]}>
          <Select
          showSearch
          placeholder="Select Service Type">
            <Option value="Pifzer">Pifzer</Option>
            <Option value="jonhson">Johnson & Johnson</Option>
          </Select>
        </Form.Item>

        <Form.Item
        label="ConformationCode"
        name="ConformationCode"
        rules={[{ required: true, message: 'Please input your conformation code!' }]}
      >
        <Input placeholder='Conformation Code' />
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

export default AddVaccineAppointmentForm