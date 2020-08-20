import React, { Component } from "react";
import {
  Collapse,
} from "reactstrap";
import { Badge, Table } from "reactstrap"

export default class RecentOrdersCollapse extends Component {
  render() {
    const { title, data, id } = this.props;
    return (
      <tr>
        {(data.customerId["toggleVal" + id] || data.products["toggleVal" + id]) &&
          <td colSpan="8">
            {title == "customerId" ? (
              <Collapse style={{
                padding: "10px",
                border: "2px solid #dee2e6"
              }
              } isOpen={data.customerId["toggleVal" + id]}>
                <Table responsive className="table--bordered">
                  {/* <thead>
                    <tr>
                      <th>Customer Id</th>
                      <th>Name</th>
                      <th>Last Name</th>
                      <th>Phone</th>
                      <th>City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.customerId._id}</td>
                      <td>{data.customerId.name}</td>
                      <td>{data.customerId.lastname}</td>
                      <td>{data.customerId.phone}</td>
                      <td>{data.customerId.city}</td>
                    </tr>
                  </tbody> */}
                  <div className="billing-stats">
                    <div>
                      <div className="stats__head">Billing address</div>
                      <div>
                        <div>Maria Robertson</div>
                        <div>99 Shriley Ave.</div>
                        <div>London</div>
                        <div>EJHM99</div>
                        <div>+44 899388829</div>
                        <div>E-mail: Mroberts@pt.com</div>
                      </div>
                    </div>
                    <div>
                      <div className="stats__head">Shipping address:</div>
                      <div>
                        <div>Maria Robertson</div>
                        <div>99 Shriley Ave.</div>
                        <div>London</div>
                        <div>EJHM99</div>
                        <div>+44 899388829</div>
                        <div>E-mail: Mroberts@pt.com</div>
                      </div>
                    </div>
                    <div>
                      <div className="stats__head">Shopify Order No.</div>
                      <div>99283</div>
                    </div>
                    <div className="stats__buttons">
                      <div>
                        <button className="stats__btn_status">Status</button>
                      </div>
                      <div>
                        <button className="stats__btn_replace">Request replacement</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Item Internal</th>
                        <th>Quantity</th>
                        <th>Unit Cost</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{data.customerId._id}</td>
                        <td>{data.customerId.name}</td>
                        <td>{data.customerId.lastname}</td>
                        <td>{data.customerId.phone}</td>
                        <td>{data.customerId.city}</td>
                        <td>{data.customerId.city}</td>
                      </tr>
                    </tbody>
                  </div>
                  <div>
                    <div className="chat">
                      <div className="chat__title">Contact <span>Trade portal</span></div>
                      <div className="chat__area">
                        <div className="chat__chat">
                          <div>01-07-2020: Automatic message - inffucient funds, orders on hold,</div>
                          <div>please add funds and change status</div>
                          <div>07-07-2020: Replacement approved - new Mug sent.</div>
                          <div>Order id Replacement: 293889</div>
                        </div>
                        <div className="chat__send-message">
                          <input type='text' />
                          <button className="send-btn">Send</button>
                        </div>
                      </div>
                    </div>
                    <div className="grand-total">
                      <div>
                        <div>
                          <div>Shipping Method:</div>
                          <div>Sub-total:</div>
                          <div>shipping:</div>
                          <div>VAT</div>
                        </div>
                        <div>Grand Total</div>
                      </div>
                      <div>
                        <div>
                          <div>Royal Mail Regular</div>
                          <div>£27.00</div>
                          <div>£0.00</div>
                          <div>£3.00</div>
                        </div>
                        <div>£30.00</div>
                      </div>
                    </div>
                  </div>
                </Table>

              </Collapse>
            ) : (
                <Collapse style={{
                  padding: "10px",
                  border: "2px solid #dee2e6"
                }
                } isOpen={data.products["toggleVal" + id]}>
                  <Table responsive className="table--bordered">
                    <thead>
                      <tr>
                        <th>Product Id</th>
                        <th>Brand</th>
                        <th>Brand Reference Id</th>
                        <th>Model</th>
                        <th>EAN</th>
                        <th>Weight</th>
                        <th>Shipping Speed</th>
                        <th>Discount Aora</th>
                        <th>Price Aora</th>
                        <th>Price Wwt</th>
                        <th>Stock Wwt</th>
                        <th>Suggested Price Wwt</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{data.products._id}</td>
                        <td>{data.products.brand}</td>
                        <td>{data.products.brandReferenceId}</td>
                        <td>{data.products.model}</td>
                        <td>{data.products.EAN}</td>
                        <td>{data.products.weight}</td>
                        <td>{data.products.shippingSpeed}</td>
                        <td>{data.products.discountAora}</td>
                        <td>{data.products.priceAora}</td>
                        <td>{data.products.priceWwt}</td>
                        <td>{data.products.stockWwt}</td>
                        <td>{data.products.suggestedPriceWwt}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Collapse>
              )}
          </td>
        }
      </tr>
    );
  }
}
