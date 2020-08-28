import React, { PureComponent } from "react";
import { Col, Container, Row, CardBody } from "reactstrap";
import '../../scss/component/billing_page.scss';
import Api from '../../api'
import BillingInvoices from "./components/BillingInvoices";
import BillingTransactions from "./components/BillingTransactions";
// import { withTranslation } from "react-i18next";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import axios from "axios";

class BillingPage extends PureComponent {

  state = {
    invoicesArr: [],
    transactionArr: [],
    isNotLinked: false
  };

  componentDidMount() {
    this.getInvoices();
    this.getTransaction();
  }

  getInvoices = () => {
    Api.get(`https://a8ed81e6da8c.ngrok.io/api/invoices`, { headers: { 'x-auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw` } })
      .then((data) => {
        this.setState({
          invoicesArr: data
        })
        console.log(11, data)
      })
      .catch((error) => {
        console.log(error)
      });
  }
  getTransaction = () => {
    Api.get(`https://a8ed81e6da8c.ngrok.io/api/transactions`, { headers: { 'x-auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw` } })
      .then((data) => {
        this.setState({
          transactionArr: data
        })
        console.log(12, data)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <Container>
        <CardBody className="billing-container">
          <Row>
            <Col md={12}>
              <h3 className="page-title">Transactions</h3>
              {this.state.transactionArr && this.state.transactionArr.map(transaction => (
                <BillingTransactions transaction={transaction} key={this.state.transactionArr._id} />
              ))}
            </Col>
          </Row>
        </CardBody>
        <CardBody className="billing-container">
          <Row>
            <Col md={12}>
              <h3 className="page-title">Invoices</h3>
              {this.state.invoicesArr.data && this.state.invoicesArr.data.map(invoice => (
                <BillingInvoices invoice={invoice} key={this.state.invoicesArr.data._id} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Container>
    );
  }
}

// export default connect((state) => ({
//   newOrder: state.newOrder.items,
//   rtl: state.rtl,
// }))(withTranslation("common")(Orders));
export default BillingPage;