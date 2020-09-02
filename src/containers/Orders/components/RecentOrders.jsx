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
import SelectPagination from "../../helpers/components/SelectDefault";
import axios from "axios";

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
  const [openDetails, setOpenDetails] = useState(false);
  const [currentDetails, setCurrentDetails] = useState('');
  const [messages, setMessages] = useState([]);

  const openCurrentDetails = (id) => {
    setCurrentDetails(id)
    orders.forEach(pro => {
      if (currentDetails === pro._id) {
        if (openDetails === false) {
          setOpenDetails(prevState => !prevState)
        } else if (openDetails === true) {
          setOpenDetails(prevState => !prevState)
        }
      }
    })
  };
  const getMessages = (id) => {
    axios.get(
      `https://d3767e25b9e9.ngrok.io/api/printsterOrders/${id}?select=messages`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw',
      }
    }
    ).then((data) => {
      // this.setState({
      //   messages: data.data[0].messages
      // })
      setMessages(data.data[0].messages)
    });
  }
  useEffect(() => {
    if (
      check &&
      props.ordersData &&
      props.ordersData.data &&
      props.ordersData.data.length
    ) {
      const orders = [];
      props.ordersData.data.forEach((pro, i) => {
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
      <SelectPagination testArr={orders} style={{ width: 'auto' }} />
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
                    {product.status === 'processing' ? <div className="processed order-status"><img src={Tick} height={24} /></div> : null}
                    {product.status === "cancelled" ? <div className="issues order-status"><img src={Exclamation} height={24} /></div> : null}
                    {product.status === 'delivered' ? <div className="shipped order-status"><img src={Parcel} height={24} /></div> : null}
                  </td>
                  <td>
                    <button
                      onClick={(e) => { openCurrentDetails(product._id); getMessages(product._id) }}
                      className='details-btn'
                    >Details
                    </button>
                  </td>
                </tr>
                <RecentOrdersCollapse
                  data={product}
                  title={title}
                  id={product._id}
                  openDetails={openDetails}
                  currentDetails={currentDetails}
                  messages={messages}
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
