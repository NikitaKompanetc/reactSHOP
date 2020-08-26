import React from 'react';

const BillingInvoices = (props) => {
  const getDate = (date) => {
    const d = new Date(date);
    const actualDate =
      d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    return actualDate;
  };
  return (
    <>
      <div className="billing-table">
        <div className="billing-date-from">{getDate(props.invoice.dateFrom)}</div>
        <div className="billing-date-to">{getDate(props.invoice.dateTo)}</div>
        <div className="billing-pdf"><a href={props.invoice.pdfLink} download>Download</a></div>
      </div>
    </>
  );
};

export default BillingInvoices;