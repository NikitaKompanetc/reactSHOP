import React, { useState, useEffect } from 'react';
import { Table } from "reactstrap";
import axios from "axios";
import ShopsPagination from "./components/ShopsPagination";
import { Link } from 'react-router-dom';

function Shops(props) {
  const [orders, setOrdersData] = useState([]);
  const [check, toggleCheck] = useState(true);

  const getDate = date => {
    const d = new Date(date);
    const actualDate =
      d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    return actualDate;
  };

  useEffect(() => {
    if (
      check &&
      props.ordersData &&
      props.ordersData.data &&
      props.ordersData.data.length
    ) {
      const orders = [];
      props.ordersData.forEach((pro, i) => {
        pro["toggleVal" + pro._id] = false;
        pro["toggleVal" + pro._id] = false;
        orders.push(pro);
      });
      setOrdersData(orders);
      toggleCheck(!check);
    }
  }, [props.ordersData]);

  return (
    <Table responsive className="table--bordered">
      <thead>
        <tr>
          <th>Shop Id</th>
          <th>Shop Name</th>
          <th>Shop Domain</th>
          <th>Shop Country</th>
          <th>Shop Address</th>
          <th>Shop Email</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {orders && orders.length
          ? orders.map((product, i) => (
            <>
              <tr key={product._id}>
                <td>{product.orderNo}</td>
                <td>{getDate(product.date)}</td>
                <td>{`${product.customerName}`}</td>
                <td>1</td>
                <td>{product.shippingMethod}</td>
                <td>{product.total}</td>
                <td>
                  {product.status === 'processing' ? <div className="processed order-status">OK</div> : null}
                  {product.status === "cancelled" ? <div className="issues order-status">CHECK</div> : null}
                  {/* {product.status === 'delivered' ? <div className="shipped order-status"><img src={Parcel} height={24} /></div> : null} */}
                </td>
                <td>
                  <Link to="/manage-shop">
                    <button
                      // onClick={(e) => { openCurrentDetails(product._id); getMessages(product._id) }}
                      className='details-btn'
                    >Manage shop
                    </button>
                  </Link>
                </td>
              </tr>
            </>
          ))
          : null}
      </tbody>

      <ShopsPagination />
    </Table>
  );
}

export default Shops;