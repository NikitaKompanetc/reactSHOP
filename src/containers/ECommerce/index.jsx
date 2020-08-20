import React, { PureComponent } from "react";
import { Col, Container, Row } from "reactstrap";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SalesStatistic from "./components/SalesStatistic";
import RecentOrders from "./components/RecentOrders";
import ProductSales from "./components/ProductSales";
import SalesStatistisBar from "./components/SalesStatistisBar";
import SalesReport from "./components/SalesReport";
import { deleteNewOrderTableData } from "../../redux/actions/newOrderTableActions";
import { NewOrderTableProps } from "../helpers/prop-types/TablesProps";
import { RTLProps } from "../helpers/prop-types/ReducerProps";
import axios from "axios";
import BalanceFounds from "./components/BalanceFounds";
import ManageProducts from "./components/ManageProducts";



class ECommerceDashboard extends PureComponent {
  // static propTypes = {
  //   newOrder: NewOrderTableProps.isRequired,
  //   dispatch: PropTypes.func.isRequired,
  //   t: PropTypes.func.isRequired,
  //   rtl: RTLProps.isRequired,
  // };

  state = {
    ordersData: [],
    collapse: false,
  };

  // onDeleteRow = (index, e) => {
  //   const { dispatch, newOrder } = this.props;

  //   e.preventDefault();
  //   const arrayCopy = [...newOrder];
  //   arrayCopy.splice(index, 1);
  //   dispatch(deleteNewOrderTableData(arrayCopy));
  // };

  // async componentDidMount() {
  //   const orders = await axios.get(
  //     `https://young-refuge-16506.herokuapp.com/api/orders`
  //   );
  //   this.setState({
  //     ordersData: orders,
  //   });
  // }


  render() {
    // console.log(this.state.ordersData, "bbbbbb");
    // const { t, newOrder, rtl } = this.props;

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            {/* <h3 className="page-title">{t("dashboard_commerce.page_title")}</h3> */}
            <h3 className="page-title"></h3>
          </Col>
        </Row>
        <Row>
          {/* <ProductSales rtl={"ltr"} /> */}
          <ProductSales />
          <SalesStatistic />
          <SalesStatistisBar />
          <SalesReport />
          {/* <RecentOrders ordersData={this.state.ordersData}/> */}
        </Row>
        <Row>
          <BalanceFounds />
        </Row>
        <Row>
          <ManageProducts />
        </Row>
      </Container>
    );
  }
}

// export default connect((state) => ({
//   newOrder: state.newOrder.items,
//   rtl: state.rtl,
// }))(withTranslation("common")(ECommerceDashboard));
export default ECommerceDashboard;