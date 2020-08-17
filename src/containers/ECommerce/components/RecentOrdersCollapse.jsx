import React, { Component } from "react";
import {
  Collapse,
} from "reactstrap";

export default class RecentOrdersCollapse extends Component {
  render() {
    const { title, data ,id} = this.props;
    return (
      <tr>
      {(data.customerId["toggleVal"+id] || data.products["toggleVal"+id]) && 
          <td colSpan="8">
            {title == "customerId" ? (
              <Collapse isOpen={data.customerId["toggleVal"+id]}>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Customer Id</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.customerId._id}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Name</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.customerId.name}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Last Name</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.customerId.lastname}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Phone</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.customerId.phone}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">city</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.customerId.city}</div>
                  </div>
                </div>
              </Collapse>
            ) : (
              <Collapse isOpen={data.products["toggleVal"+id]}>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Product Id</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products._id}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Brand</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.brand}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Brand Reference Id</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.brandReferenceId}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">model</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.model}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">EAN</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.EAN}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">weight</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.weight}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Shipping Speed</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.shippingSpeed}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Discount Aora</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.discountAora}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Price Aora</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.priceAora}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Price Wwt</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.priceWwt}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Stock Wwt</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.stockWwt}</div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-3">
                    <div className="text-left">Suggested Price Wwt</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="text-left">{data.products.suggestedPriceWwt}</div>
                  </div>
                </div>
              </Collapse>
            )}
          </td>
      }
      </tr>
    );
  }
}
