import React, { PureComponent } from "react";
import { Col, Container, Row, CardBody } from "reactstrap";
// import { withTranslation } from "react-i18next";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import axios from "axios";
import Api from "../../api";
import '../../scss/component/linkExisting.scss'
import ShopifyProduct from "./components/ShopifyProduct";
import TradePortalProduct from "./components/TradePortalProduct";
import ActionProduct from "./components/ActionProduct";
import StatusProduct from "./components/StatusProduct";
import UploadProduct from "./components/UploadProduct";
import SelectPagination from "../helpers/components/SelectDefault";

class LinkExisting extends PureComponent {

  state = {
    isNotLinked: false,
    isRedactProduct: false,
    testArr: [...Array(100).keys()],
    filterArr: [],
    productArr: [],
    productPrinsterArr: [],
    shopifyCategoryArr: []
  };

  componentDidMount() {
    this.pagination(10);
    this.getPrinsterProduct();
    this.getShopifyCategory();
    this.getShopifyProducts();
  }
  getPrinsterProduct = () => {
    Api.get(`https://afdbea8d0b3b.ngrok.io/api/linkedProducts/`, { headers: { 'x-auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw` } })
      .then((data) => {
        this.setState({
          productPrinsterArr: data
        })
        console.log(60, data)
      })
      .catch((error) => {
      });
  }
  getShopifyCategory = () => {
    Api.get(`https://afdbea8d0b3b.ngrok.io/api/linkedProducts/`, { headers: { 'x-auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw` } })
      .then((data) => {
        this.setState({
          productPrinsterArr: data
        })
        console.log(61, data)
      })
      .catch((error) => {
      });
  }
  getShopifyProducts = () => {
    Api.get(`https://afdbea8d0b3b.ngrok.io/api/shopify/products`, { headers: { 'x-auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw` } })
      .then((data) => {
        this.setState({
          productPrinsterArr: data
        })
        console.log(62, data)
      })
      .catch((error) => {
      });
  }

  editProduct = () => {
    let toggleEdit = this.state.isRedactProduct
    this.setState({
      isRedactProduct: !toggleEdit
    })
  }

  pagination = (value) => {
    let paginationArr = [...this.state.testArr]
    if (value === 10) {
      let filtered = paginationArr.filter(element =>
        paginationArr.indexOf(element) <= 10
      )
      this.setState({
        filterArr: filtered
      })
    }
    else if (value === 20) {
      let filtered = paginationArr.filter(element =>
        paginationArr.indexOf(element) <= 20
      )
      this.setState({
        filterArr: filtered
      })
    }
  }

  render() {
    return (
      <Container className="link-existing--container">
        <CardBody>
          <Row>
            <Col md={12}>
              <h3 className="page-title">Link Existing products</h3>
              <SelectPagination testArr={this.state.testArr} pagination={this.pagination} style={{ width: 'auto' }} />
              <div>{this.state.filterArr}</div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <h4>Shopify Products</h4>
              <ShopifyProduct />
            </Col>
            <Col md={4}>
              <h4>Trade Portal products</h4>
              <TradePortalProduct
                isNotLinked={this.state.isNotLinked}
              />
            </Col>
            {this.state.isRedactProduct ? null : <Col md={2} className="actions-products">
              <h4>Status</h4>
              <StatusProduct />
            </Col>
            }
            <Col md={2} className="actions-products">
              <h4>Action</h4>
              <ActionProduct
                isRedactProduct={this.state.isRedactProduct}
                editProduct={this.editProduct}
              />
            </Col>
          </Row>
          <Row>
            {this.state.isRedactProduct ? <UploadProduct /> : null}
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
export default LinkExisting;