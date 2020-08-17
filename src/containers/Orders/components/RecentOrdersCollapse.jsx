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
                  <thead>
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
                  </tbody>
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
