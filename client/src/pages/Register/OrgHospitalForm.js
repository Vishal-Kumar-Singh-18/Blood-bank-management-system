import React from "react";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { getAntdInputValidation } from "../../utils/helpers";

function OrgHospitalForm({ type }) {
  const fieldName = type === "hospital" ? "hospitalName" : "organizationName";
  return (
    <>
      <Form.Item
        label={type === "hospital" ? "Hospital name" : "Organization name"}
        name={fieldName}
        rules={[
          {
              required: type === "hospital",
              message: `${type === "hospital" ? "Hospital" : "Organization"} name is required`,
          },
          ...getAntdInputValidation()
      ]}
      
      >
        <Input />
      </Form.Item>
      <Form.Item label="Owner" name="owner" rules={getAntdInputValidation()}>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={getAntdInputValidation()}>
        <Input />
      </Form.Item>
      <Form.Item label="Phone" name="phone" rules={getAntdInputValidation()}>
        <Input />
      </Form.Item>
      <Form.Item label="Website" name="website" rules={getAntdInputValidation()}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={getAntdInputValidation()}>
        <Input type="password"/>
      </Form.Item>
      <Form.Item label="Address" name="address" className="col-span-2" rules={getAntdInputValidation()}>
        <TextArea />
      </Form.Item>
    </>
  );
}

export default OrgHospitalForm;
