import React, { PureComponent } from "react";
import { Col, Container, Row } from "reactstrap";
import RecentOrders from "./components/RecentOrders";
import '../../scss/component/orders.scss';
import axiosConfig from '../../axiosConfig';

class Orders extends PureComponent {
  state = {
    ordersData: [],
    paginationSize: 10,
  };
  componentDidMount() {
    this.pagination()
  }
  pagination = value => {
    this.setState({ paginationSize: value })
    axiosConfig.get(`/api/printsterOrders/?pS=${this.state.paginationSize}`)
      .then(response => { this.setState({ ordersData: response.data }) });
  }

  render() {
    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Orders list</h3>
          </Col>
        </Row>
        <Row>
          <RecentOrders ordersData={this.state.ordersData} pagination={this.pagination} />
        </Row>
      </Container>
    );
  }
}
export default Orders;