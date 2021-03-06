import React, { PureComponent } from "react";
import { Col, Container, Row, CardBody, Card } from "reactstrap";
import '../../../scss/component/balance_founds.scss';
import { connect } from 'react-redux';
import PaymentPopUp from "./PaymentPopUp";

export default class BalanceFounds extends PureComponent {

  state = {
    collapse: false,
  };

  togglePaymentPopUp = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  render() {
    return (
      <Container>
        <CardBody className="dashboard-balance">
          <Row>
            <Col md={12}>
              <div className="balance__title">Balance</div>
              <div className="balance__descr">Here you can see and fund your balance</div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="funds-block">
              <div className="balance__title">Funds</div>
              <div className="balance__descr">GPB Balance: €12 324.34</div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="add-funds">
              <div className="add__input">
                <span className="label-amount">Amount</span>
                <input type='text' />
              </div>
              <div className="btn-container">
                <button className="add__btn" onClick={this.togglePaymentPopUp}>ADD FUNDS</button>
              </div>
            </Col>
          </Row>
        </CardBody>
        <PaymentPopUp collapse={this.state.collapse} togglePaymentPopUp={this.togglePaymentPopUp} />
      </Container>
    )
  }
}