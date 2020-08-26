import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectShippingProfile = () => (
  <>
    <div className="choose-label">Shipping Profile</div>
    <Select defaultValue="Choose profile" style={{ width: '100%' }}>
      <Option value="jack">Profile 1</Option>
      <Option value="lucy">Profile 2</Option>
    </Select>
  </>
);

export default SelectShippingProfile;