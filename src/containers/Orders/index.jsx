import React, { PureComponent } from "react";
import { Col, Container, Row } from "reactstrap";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RecentOrders from "./components/RecentOrders";
import '../../scss/component/orders.scss'
// import { deleteNewOrderTableData } from "../../../redux/actions/newOrderTableActions";
// import { NewOrderTableProps } from "../../../shared/prop-types/TablesProps";
// import { RTLProps } from "../../../shared/prop-types/ReducerProps";
import axios from "axios";
import DataOrders from './data.json';

class Orders extends PureComponent {
  // static propTypes = {
  //   newOrder: NewOrderTableProps.isRequired,
  //   dispatch: PropTypes.func.isRequired,
  //   t: PropTypes.func.isRequired,
  //   rtl: RTLProps.isRequired,
  // };

  state = {
    ordersData: DataOrders,
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
  //   console.log(37, orders)
  //   this.setState({
  //     ordersData: orders,
  //   });
  // }


  async componentDidMount() {
    const orders = await axios.get(
      `https://d3767e25b9e9.ngrok.io/api/printsterOrders/`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw',

        }
      }
    );
    this.setState({
      ordersData: orders,
    });
  }

  // test = () => {

  //   console.log(100, test)
  // }


  render() {
    const { t, newOrder, rtl } = this.props;
    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            {/* <h3 className="page-title">{t("dashboard_orders.page_title")}</h3> */}
            <h3 className="page-title">Orders list</h3>
          </Col>
        </Row>
        <Row>
          <RecentOrders ordersData={this.state.ordersData} />
        </Row>
      </Container>
    );
  }
}

// export default connect((state) => ({
//   newOrder: state.newOrder.items,
//   rtl: state.rtl,
// }))(withTranslation("common")(Orders));
export default Orders;