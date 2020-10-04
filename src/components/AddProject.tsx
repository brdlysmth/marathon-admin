import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Form, Input, Button, Select } from "antd";
import { Card, Col, Row } from "antd";
import { List, Avatar, Skeleton } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const ADD_PROJECT = gql`
  mutation AddProject(input: AddProjectInput) {
    AddProject(input: $input) {
      name
    }
  }
`;

const AddProject: React.FC = () => {
  let input: any;
  const [addProject, { data }] = useMutation(ADD_PROJECT);

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
    addProject();
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
      <Form.Item name="name" label="Name" rules={[{ required: false }]}>
        <Input />
      </Form.Item>

      <Form.Item name="number" label="Number" rules={[{ required: false }]}>
        <Input />
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

export default AddProject;
