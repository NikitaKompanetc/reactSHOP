import React from "react";
import { Table } from "reactstrap";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Panel from "../../../helpers/Panel";
import { useState, useEffect } from "react";

const RecentOrders = ({ t, ...props }) => {
  const getDate = date => {
    const d = new Date(date);
    const actualDate =
      d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    return actualDate;
  };
  const [orders, setOrdersData] = useState([]);
  const [check, toggleCheck] = useState(true);

  useEffect(() => {
    if (
      check &&
      props.ordersData &&
      props.ordersData.data &&
      props.ordersData.data.length
    ) {
      const orders = [];
      props.ordersData.data.forEach((pro, i) => {
        pro.customerId["toggleVal" + pro._id] = false;
        pro.products["toggleVal" + pro._id] = false;
        orders.push(pro);
      });
      setOrdersData(orders);
      toggleCheck(!check);
    }
  }, [props.ordersData]);

  return (
    <Panel lg={12} title={t("dashboard_commerce.recent_orders")}>
      <Table responsive className="table--bordered">
        <thead>
          <tr>
            <th>Shop id</th>
            <th>Shop Name</th>
            <th>Shop Domain</th>
            <th>Shop Country</th>
            <th>Shop Address</th>
            <th>Shop Email</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.length
            ? orders.map((product, i) => (
              <>
                <tr>
                  <td>{i + 1}</td>
                  <td>{product._id}</td>
                  <td>{`${product.customerId.name} ${product.customerId.lastname}`}</td>
                  <td>{product.products.model}</td>
                  <td>1</td>
                  <td>{getDate(product.products.importDate)}</td>
                  <td>{product.customerId.city}</td>
                </tr>
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
