import React, { PureComponent } from "react";
import { Col, Container, Row } from "reactstrap";
import SalesStatistic from "./components/SalesStatistic";
import RecentOrders from "./components/RecentOrders";
import ProductSales from "./components/ProductSales";
import SalesStatistisBar from "./components/SalesStatistisBar";
import SalesReport from "./components/SalesReport";
import ShowAllShops from "./components/ShowAllShops";
import '../../../scss/component/trade_portal_dashboard.scss';


class TradePortalDashboard extends PureComponent {
  state = {
    ordersData: [],
    collapse: false,
  };

  render() {
    return (
      <Container className="dashboard">
        <Row>
          <ProductSales />
          <SalesStatistic />
          <SalesStatistisBar />
          <SalesReport />
        </Row>
        <Row>
          <RecentOrders />
        </Row>
        <Row className='m-0'>
          <ShowAllShops />
        </Row>
      </Container>
    );
  }
}

export default TradePortalDashboard;