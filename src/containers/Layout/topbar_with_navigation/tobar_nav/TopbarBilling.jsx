import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const TopBarBilling = () => {
  return (
    <div className="topbar__collapse">
      <div className="topbar__btn" style={{ fontSize: 8 }}>
        <Link to="/billing"><SettingOutlined /></Link>
      </div>
    </div>
  );
};

export default TopBarBilling;