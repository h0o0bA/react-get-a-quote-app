// import React from 'react';
// import CreateApplicant from '../../components/create'
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'antd';
// const UserDetails = () => {
//     let navigate = useNavigate();
//     return (
//         <>
//             <h1>User Details</h1>
//             <Button type="primary" onClick={() => {navigate('/')}}>Back</Button>
//             <CreateApplicant />
//         </>
//     );
// }

// export default UserDetails;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addAvailablePolicy } from "../../redux/userBuismess";
import { useCreateCommercialApplicantMutation } from "../../services/commercialApplicant";

const { Option } = Select;

const UserDetails = () => {
  const [
    createApplicant,
    responseInfo,
  ] = useCreateCommercialApplicantMutation();
  const { buisnessUser } = useSelector((state) => state.buisnessUser);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (responseInfo.isSuccess) {
      dispatch(addAvailablePolicy(responseInfo.data.availablePolicyTypes));
      navigate("/final_screen");
    }
  }, [responseInfo]);

  const onFinish = (values) => {
    const { numEmployess, grossAnnualSales, annualPayroll, zip } = values;
    const user = {
      numEmployess: parseInt(numEmployess),
      grossAnnualSales: parseInt(grossAnnualSales),
      annualPayroll: parseInt(annualPayroll),
      locations: [{ zip }],
    };
    const submittedUser = { ...buisnessUser, ...user };
    createApplicant(submittedUser);
  };

  return (
    <div className="main-div" data-testid="user-details">
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
          label="Number of employess"
          name="numEmployess"
          rules={[
            {
              required: true,
              message: "Please input number of employess!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Zip Code"
          name="zip"
          rules={[
            {
              required: true,
              message: "Please input zip code!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="grossAnnualSales"
          label="Gross Annual Sales"
          rules={[
            {
              required: true,
              message: "Please add gross sale",
            },
          ]}
        >
          <Select placeholder="Gross Sales" allowClear>
            <Option value="500000">$50k</Option>
            <Option value="750000">$75k</Option>
            <Option value="1000000">$100k</Option>
            <Option value="1500000">$150k</Option>
            <Option value="2000000">$200k</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="annualPayroll"
          label="Annual Payroll"
          rules={[
            {
              required: true,
              message: "Please add annual Payrole",
            },
          ]}
        >
          <Select placeholder="Annual Payroll" allowClear>
            <Option value="500000">$50k</Option>
            <Option value="750000">$75k</Option>
            <Option value="1000000">$100k</Option>
            <Option value="1500000">$150k</Option>
            <Option value="2000000">$200k</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </Button>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserDetails;
