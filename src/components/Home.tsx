import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Form, Input, Button, Select } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const Home: React.FC = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: any) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        return;
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="address" label="Address" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="rep" label="Representative" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="customer" label="Customer" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="prepaid" label="Prepaid" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="hardware" label="Hardware" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="watermark">Watermark</Option>
          <Option value="sentek">Sentek</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item name="notes" label="Notes" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) => {
          return getFieldValue("gender") === "other" ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          ) : null;
        }}
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>

        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Home;
