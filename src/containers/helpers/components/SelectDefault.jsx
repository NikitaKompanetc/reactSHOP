import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectPagination = (props) => (
  <>
    <div className="pagination-products"><span className="label-select pr-1">Show</span>
      <Select defaultValue={10} style={props.style} onChange={props.pagination}>
        <Option value={5}>5</Option>
        <Option value={10}>10</Option>
        <Option value={20}>20</Option>
        <Option value={7}>7</Option>
        <Option value={3}>3</Option>
      </Select>
      <span> entries</span>
    </div>
  </>
);

export default SelectPagination;