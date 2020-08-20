/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import { Collapse } from 'reactstrap';
import Payment from '../../Payment/index';


export default class PaymentPopUp extends PureComponent {

  render() {
    const { collapse } = this.props;
    return (
      <div className="topbar__collapse">
        {/* <button className="topbar__btn" type="button" onClick={this.props.togglePaymentPopUp}>open</button> */}
        {collapse && <button className="topbar__back" type="button" onClick={this.props.togglePaymentPopUp} />}
        <Collapse
          isOpen={collapse}
          className="topbar__collapse-content payment-popup"
        >
          <Payment />
        </Collapse>
      </div>
    );
  }
}
