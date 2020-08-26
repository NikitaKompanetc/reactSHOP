import React from "react";
import { Badge, Table } from "reactstrap";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Panel from "../../../shared/components/Panel";
import { useState, useEffect } from "react";
import RecentOrdersCollapse from "./RecentOrdersCollapse";
import Tick from '../../../shared/img/Tick.svg';
import Parcel from '../../../shared/img/Parcel.svg';
import Exclamation from '../../../shared/img/Exclamation.svg';

const RecentOrders = ({ t, ...props }) => {
  const getDate = date => {
    const d = new Date(date);
    const actualDate =
      d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    return actualDate;
  };
  const [orders, setOrdersData] = useState([]);
  const [check, toggleCheck] = useState(true);
  const [title, setTitle] = useState("");
  //const [openDetails, setOpenDetails] = useState(fasle);

  const handleCollapse = (title1, title2, id) => {
    const newOrders = [];
    orders.forEach((pro, i) => {
      if (id == pro._id) {
        pro[title1]["toggleVal" + pro._id] = !pro[title1][
          "toggleVal" + pro._id
        ];
      } else {
        pro[title1]["toggleVal" + pro._id] = false;
      }
      pro[title2]["toggleVal" + pro._id] = false;
      newOrders.push(pro);
    });
    setOrdersData(newOrders);
    setTitle(title1);
  };

  useEffect(() => {
    if (
      check &&
      props.ordersData &&
      props.ordersData.data &&
      props.ordersData.data.length
    ) {
      const orders = [];
      props.ordersData.data.forEach((pro, i) => {
        console.log(50, pro)
        pro["toggleVal" + pro._id] = false;
        pro["toggleVal" + pro._id] = false;
        orders.push(pro);
      });
      setOrdersData(orders);
      toggleCheck(!check);
    }
  }, [props.ordersData]);

  return (
    <Panel lg={12} title={t("dashboard_orders.orders_list")}>
      <Table responsive className="table--bordered">
        <thead>
          <tr>
            <th>Order No.</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Items</th>
            <th>Shipping method</th>
            <th>Total</th>
            <th>Issues</th>
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
                  <td>{product.issues}</td>
                  <td>
                    {product.status === 'processing' ? <div className="processed"><img src={Tick} height={24} /></div> : null}
                    {product.status === "cancelled" ? <div className="issues"><img src={Exclamation} height={24} /></div> : null}
                    {product.status === 'delivered' ? <div className="shipped"><img src={Parcel} height={24} /></div> : null}
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleCollapse("customerId", "products", product._id)
                      }
                      className='details-btn'
                    >Details</button>
                  </td>
                </tr>
                <RecentOrdersCollapse
                  data={product}
                  title={title}
                  id={product._id}
                />
              </>
            ))
            : null}
        </tbody>
      </Table>
    </Panel>
  );
};

RecentOrders.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(RecentOrders);
