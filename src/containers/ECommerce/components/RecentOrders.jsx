import React from "react";
import { Badge, Table } from "reactstrap";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Panel from "../../helpers/Panel";
import { useState, useEffect } from "react";
import RecentOrdersCollapse from "./RecentOrdersCollapse";

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
            <th>#</th>
            <th>Order Id</th>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.length
            ? orders.map((product, i) => (
                <>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{product._id}</td>
                    <td
                      onClick={() =>
                        handleCollapse("customerId", "products", product._id)
                      }
                    >{`${product.customerId.name} ${product.customerId.lastname}`}</td>
                    <td
                      onClick={() =>
                        handleCollapse("products", "customerId", product._id)
                      }
                    >
                      {product.products.model}
                    </td>
                    <td>1</td>
                    <td>{getDate(product.products.importDate)}</td>
                    <td>{product.customerId.city}</td>
                    <td>
                      <Badge color="success">In Progress</Badge>
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
