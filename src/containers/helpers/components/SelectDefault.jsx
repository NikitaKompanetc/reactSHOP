import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectPagination = (props) => (
  <>
    <div className="pagination-products"><span className="label-select">Show</span>
      <Select defaultValue={10} style={props.style} onChange={props.pagination}>
        <Option value={5}>5</Option>
        <Option value={10}>10</Option>
        <Option value={20}>20</Option>
        <Option value={50}>50</Option>
        <Option value={100}>100</Option>
      </Select>
      <span> entries</span>
    </div>
  </>
);

export default SelectPagination;