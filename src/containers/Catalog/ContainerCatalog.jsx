import React, { Component } from 'react';
import Api from "../../api";
import { connect } from 'react-redux';
import Catalog from '.';
class ContainerCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productArr: [

      ],
      categoryName: [
        { name: 'T-shirt' },
        { name: 'Hoodies' },
        { name: 'Mugs' },
        { name: 'Socks' },
        { name: 'Face masks' },
        { name: 'Keyrings' },
        { name: 'Cards' },
        { name: 'Gift Wraps' },
        { name: 'Posters' }
      ],
      targetCategory: 'T-shirt',
    }
  }
  componentDidMount() {
    this.productData();
  }
  filterCategory = (item) => {
    console.log(21, item)
    this.setState({
      targetCategory: item
    })
    // this.state.productArr.data.forEach(element => {
    // const filteredArray = this.state.productArr.data.filter(productType => productType === 'T-shirt')
    // console.log(20, filteredArray)
    //})
  }
  productData = () => {
    Api.get(`https://a8ed81e6da8c.ngrok.io/api/printsterProducts`, { headers: { 'x-auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw` } })
      .then((data) => {
        this.setState({
          productArr: data
        })
        console.log(11, data)
      })
      .catch((error) => {
      });
  }

  render() {

    return (
      <Catalog
        productArr={this.state.productArr}
        filterCategory={this.filterCategory}
        categoryName={this.state.categoryName}
        targetCategory={this.state.targetCategory}
      />
    )
  }

};

const mapStateToProps = store => {
  return {
  }
}

export default connect(mapStateToProps)(ContainerCatalog);