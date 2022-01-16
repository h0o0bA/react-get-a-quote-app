import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userBuismess";

const { Option } = Select;

const UserInfo = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const { buisnessName, contactEmail, industryId } = values;
    const user = {
      buisnessName,
      contactEmail,
      industryId,
    };
    dispatch(addUser(user));
    navigate("/user_details");
  };

  return (
    <div className="main-div" data-testid="user-info">
      <h1>Get a Quote</h1>
      <Form
        name="basic"
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Business Name"
          name="buisnessName"
          rules={[
            {
              required: true,
              message: "Please input your business name!",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Contact Email"
          name="contactEmail"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          name="industryId"
          label="Industry Id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select an Industry" allowClear>
            <Option value="10537">Plumber</Option>
            <Option value="10391">Software developer</Option>
            <Option value="10415">Lawyer</Option>
            <Option value="10109">Handyman</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserInfo;
