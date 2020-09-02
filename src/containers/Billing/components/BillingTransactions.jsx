import React from 'react';

const BillingTransactions = (props) => {
  const getDate = (date) => {
    const d = new Date(date);
    const actualDate =
      d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    return actualDate;
  };
  return (
    <>
      <div className="billing-table">
        <div className="transaction-table">
          <div className="head-table-transaction font-weight-bold">
            <div>VAT</div>
            <div>currency</div>
            <div>date</div>
            <div>description</div>
            <div>paymentId</div>
            <div>refundedAmount</div>
            <div>shippingPrice</div>
            <div>total</div>
          </div>
          <div className="body-table-transaction">
            <div>{props.transaction.VAT}</div>
            <div>{props.transaction.currency}</div>
            <div>{props.transaction.date}</div>
            <div>{props.transaction.description}</div>
            <div>{props.transaction.paymentId}</div>
            <div>{props.transaction.refundedAmount}</div>
            <div>{props.transaction.shippingPrice}</div>
            <div>{props.transaction.total}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingTransactions;