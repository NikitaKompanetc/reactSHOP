import React, { PureComponent } from "react";
import { Container, Row } from "reactstrap";
import RecentOrders from "./RecentOrders";
import '../../../../scss/component/trade_portal_shops.scss'
import axios from "axios";

class RecentContainer extends PureComponent {

  state = {
    ordersData: [],
  };

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
      ordersData: orders.data.data,
    });
  }

  render() {
    return (
      <Container className="dashboard">
        <Row>
          <RecentOrders ordersData={this.state.ordersData} />
        </Row>
      </Container>
    );
  }
}

export default RecentContainer;