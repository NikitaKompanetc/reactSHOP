import React, { PureComponent } from "react";
import { Col, Container, Row } from "reactstrap";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RecentOrders from "./components/RecentOrders";
import { deleteNewOrderTableData } from "../../../redux/actions/newOrderTableActions";
import { NewOrderTableProps } from "../../../shared/prop-types/TablesProps";
import { RTLProps } from "../../../shared/prop-types/ReducerProps";
import axios from "axios";

class Orders extends PureComponent {
  static propTypes = {
    newOrder: NewOrderTableProps.isRequired,
    dispatch: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    rtl: RTLProps.isRequired,
  };

  state = {
    ordersData: [],
  };

  onDeleteRow = (index, e) => {
    const { dispatch, newOrder } = this.props;

    e.preventDefault();
    const arrayCopy = [...newOrder];
    arrayCopy.splice(index, 1);
    dispatch(deleteNewOrderTableData(arrayCopy));
  };

  async componentDidMount() {
    const orders = await axios.get(
      `https://young-refuge-16506.herokuapp.com/api/orders`
    );
    this.setState({
      ordersData: orders,
    });
  }

  render() {
    const { t, newOrder, rtl } = this.props;

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">{t("dashboard_orders.page_title")}</h3>
          </Col>
        </Row>
        <Row>
          <RecentOrders ordersData={this.state.ordersData} />
        </Row>
      </Container>
    );
  }
}

export default connect((state) => ({
  newOrder: state.newOrder.items,
  rtl: state.rtl,
}))(withTranslation("common")(Orders));
