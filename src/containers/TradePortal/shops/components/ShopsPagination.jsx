import React from 'react';
import { Pagination } from 'antd';

function ShopsPagination(props) {
  return (
    <div className="mt-4">
      <Pagination defaultCurrent={1} total={4} />
    </div>
  );
}

export default ShopsPagination;