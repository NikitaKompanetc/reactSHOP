import React, { Component } from 'react';
import Api from "../../api";
import { connect } from 'react-redux';
import Catalog from '.';
class ContainerCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productArr: [
        "data"[
        {
          "printMethod": [
            "Garment"
          ],
          "materials": [
            "Keramik"
          ],
          "colors": [],
          "images": [
            "Image1",
            "image2"
          ],
          "specialAccess": [
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8"
          ],
          "specialPrice": [
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            }
          ],
          "_id": "5f3fa437c1e0b123b059f553",
          "name": "A new printster product",
          "leadTime": 3,
          "price": 5.99,
          "availability": "Not available",
          "printTemplate": "http://printts.co.uk/yourtemplate",
          "productType": "T-shirt",
          "artWorkTeam": "Copenhagen",
          "artWorkTeamFinal": "wwwwww.",
          "workFlow": "test",
          "weight": 100,
          "generalInfo": "This is a Mug",
          "brand": {
            "_id": "5f3d49443f88f73418b21882",
            "name": "Mringster"
          },
          "packaging": "information about the packaging",
          "printsterSKU": "E7EJJK99",
          "minQty": 0,
          "designService": false,
          "customPackaging": true,
          "customerMessage": "true",
          "customInsert": "true",
          "image": "image_front",
          "isStandardProduct": true,
          "variants": [
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3e445d898c710ad04c1b44",
              "name": "L / Red",
              "brand": {
                "_id": "5f3d49443f88f73418b21882",
                "name": "Mringster"
              },
              "weight": 205,
              "image": "The image",
              "colour": "Red",
              "size": "L",
              "__v": 0
            },
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3e446e0b151740ac6e30e2",
              "name": "L / Red",
              "brand": {
                "_id": "5f3d49443f88f73418b21882",
                "name": "Mringster"
              },
              "weight": 205,
              "image": "The image",
              "colour": "Red",
              "size": "L",
              "__v": 0
            }
          ],
          "__v": 0,
          "id": "5f3fa437c1e0b123b059f553"
        },
        {
          "printMethod": [
            "Garment"
          ],
          "materials": [
            "Keramik"
          ],
          "colors": [],
          "images": [
            "Image1",
            "image2"
          ],
          "specialAccess": [
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8"
          ],
          "specialPrice": [
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            }
          ],
          "_id": "5f3fa3bac1e0b123b059f547",
          "name": "A new printster product",
          "leadTime": 3,
          "price": 5.99,
          "availability": "Not available",
          "printTemplate": "http://printts.co.uk/yourtemplate",
          "productType": "T-shirt",
          "artWorkTeam": "Copenhagen",
          "artWorkTeamFinal": "wwwwww.",
          "workFlow": "test",
          "weight": 100,
          "generalInfo": "This is a Mug",
          "brand": {
            "_id": "5f3d49443f88f73418b21882",
            "name": "Mringster"
          },
          "packaging": "information about the packaging",
          "printsterSKU": "E7EJJK99",
          "minQty": 0,
          "designService": false,
          "customPackaging": true,
          "customerMessage": "true",
          "customInsert": "true",
          "image": "image_front",
          "isStandardProduct": true,
          "variants": [
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3e445d898c710ad04c1b44",
              "name": "L / Red",
              "brand": {
                "_id": "5f3d49443f88f73418b21882",
                "name": "Mringster"
              },
              "weight": 205,
              "image": "The image",
              "colour": "Red",
              "size": "L",
              "__v": 0
            },
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3e446e0b151740ac6e30e2",
              "name": "L / Red",
              "brand": {
                "_id": "5f3d49443f88f73418b21882",
                "name": "Mringster"
              },
              "weight": 205,
              "image": "The image",
              "colour": "Red",
              "size": "L",
              "__v": 0
            }
          ],
          "__v": 0,
          "id": "5f3fa3bac1e0b123b059f547"
        },
        {
          "printMethod": [
            "Garment"
          ],
          "materials": [
            "Keramik"
          ],
          "colors": [],
          "images": [
            "Image1",
            "image2"
          ],
          "specialAccess": [
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8"
          ],
          "specialPrice": [
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            }
          ],
          "_id": "5f3e65fc67d9412980691991",
          "name": "A new printster product",
          "leadTime": 3,
          "price": 5.99,
          "availability": "Not available",
          "printTemplate": "http://printts.co.uk/yourtemplate",
          "productType": "T-shirt",
          "artWorkTeam": "Copenhagen",
          "artWorkTeamFinal": "wwwwww.",
          "workFlow": "test",
          "weight": 100,
          "generalInfo": "This is a Mug",
          "brand": {
            "_id": "5f3d49443f88f73418b21882",
            "name": "Mringster"
          },
          "packaging": "information about the packaging",
          "printsterSKU": "E7EJJK99",
          "minQty": 0,
          "designService": false,
          "customPackaging": true,
          "customerMessage": "true",
          "customInsert": "true",
          "image": "image_front",
          "isStandardProduct": true,
          "variants": [
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3e445d898c710ad04c1b44",
              "name": "L / Red",
              "brand": {
                "_id": "5f3d49443f88f73418b21882",
                "name": "Mringster"
              },
              "weight": 205,
              "image": "The image",
              "colour": "Red",
              "size": "L",
              "__v": 0
            },
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3e446e0b151740ac6e30e2",
              "name": "L / Red",
              "brand": {
                "_id": "5f3d49443f88f73418b21882",
                "name": "Mringster"
              },
              "weight": 205,
              "image": "The image",
              "colour": "Red",
              "size": "L",
              "__v": 0
            }
          ],
          "__v": 0,
          "id": "5f3e65fc67d9412980691991"
        },
        {
          "printMethod": [
            "Garment"
          ],
          "materials": [
            "Keramik"
          ],
          "colors": [],
          "images": [
            "Image1",
            "image2"
          ],
          "specialAccess": [
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8"
          ],
          "specialPrice": [
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            }
          ],
          "_id": "5f3e5ae098c00a3e04dbc700",
          "name": "A new printster product",
          "leadTime": 3,
          "price": 5.99,
          "availability": "Not available",
          "printTemplate": "http://printts.co.uk/yourtemplate",
          "productType": "T-shirt",
          "artWorkTeam": "Copenhagen",
          "artWorkTeamFinal": "wwwwww.",
          "workFlow": "test",
          "weight": 100,
          "generalInfo": "This is a Mug",
          "brand": {
            "_id": "5f3d49443f88f73418b21882",
            "name": "Mringster"
          },
          "packaging": "information about the packaging",
          "printsterSKU": "E7EJJK99",
          "minQty": 0,
          "designService": false,
          "customPackaging": true,
          "customerMessage": "true",
          "customInsert": "true",
          "image": "image_front",
          "isStandardProduct": true,
          "variants": [
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3e445d898c710ad04c1b44",
              "name": "L / Red",
              "brand": {
                "_id": "5f3d49443f88f73418b21882",
                "name": "Mringster"
              },
              "weight": 205,
              "image": "The image",
              "colour": "Red",
              "size": "L",
              "__v": 0
            },
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3e446e0b151740ac6e30e2",
              "name": "L / Red",
              "brand": {
                "_id": "5f3d49443f88f73418b21882",
                "name": "Mringster"
              },
              "weight": 205,
              "image": "The image",
              "colour": "Red",
              "size": "L",
              "__v": 0
            }
          ],
          "__v": 0,
          "id": "5f3e5ae098c00a3e04dbc700"
        },
        {
          "printMethod": [
            "Garment"
          ],
          "materials": [
            "Keramik"
          ],
          "colors": [],
          "images": [
            "Image1",
            "image2"
          ],
          "specialAccess": [
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8"
          ],
          "specialPrice": [
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            }
          ],
          "_id": "5f3e4d2a426d552e74cd6179",
          "name": "A new printster product",
          "leadTime": 3,
          "price": 5.99,
          "availability": "Not available",
          "printTemplate": "http://printts.co.uk/yourtemplate",
          "productType": "T-shirt",
          "artWorkTeam": "Copenhagen",
          "artWorkTeamFinal": "wwwwww.",
          "workFlow": "test",
          "weight": 100,
          "generalInfo": "This is a Mug",
          "brand": {
            "_id": "5f3d49443f88f73418b21882",
            "name": "Mringster"
          },
          "packaging": "information about the packaging",
          "printsterSKU": "E7EJJK99",
          "minQty": 0,
          "designService": false,
          "customPackaging": true,
          "customerMessage": "true",
          "customInsert": "true",
          "image": "image_front",
          "isStandardProduct": true,
          "variants": [
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3e446e0b151740ac6e30e2",
              "name": "L / Red",
              "image": "The image",
              "colour": "Red",
              "size": "L"
            }
          ],
          "__v": 0,
          "id": "5f3e4d2a426d552e74cd6179"
        },
        {
          "printMethod": [
            "Garment"
          ],
          "materials": [
            "Keramik"
          ],
          "colors": [],
          "images": [
            "Image1",
            "image2"
          ],
          "specialAccess": [
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8"
          ],
          "specialPrice": [
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            }
          ],
          "_id": "5f3e3c56413b4328ac837e8e",
          "name": "A new printster product",
          "leadTime": 3,
          "price": 5.99,
          "availability": "Not available",
          "printTemplate": "http://printts.co.uk/yourtemplate",
          "productType": "T-shirt",
          "artWorkTeam": "Copenhagen",
          "artWorkTeamFinal": "wwwwww.",
          "workFlow": "test",
          "weight": 100,
          "generalInfo": "This is a Mug",
          "brand": {
            "_id": "5f3d49443f88f73418b21882",
            "name": "Mringster"
          },
          "packaging": "information about the packaging",
          "printsterSKU": "E7EJJK99",
          "minQty": 0,
          "designService": false,
          "customPackaging": true,
          "customerMessage": "true",
          "customInsert": "true",
          "image": "image_front",
          "isStandardProduct": true,
          "variants": [
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3e3c56413b4328ac837e90",
              "name": "Green / mkl",
              "weight": 200,
              "image": "https://imagetotheProduct.com",
              "colour": "Green",
              "size": "mkl"
            }
          ],
          "__v": 0,
          "id": "5f3e3c56413b4328ac837e8e"
        },
        {
          "printMethod": [
            "Garment"
          ],
          "materials": [
            "Keramik"
          ],
          "colors": [
            "black",
            "white"
          ],
          "images": [
            "Image1",
            "image2"
          ],
          "specialAccess": [
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8",
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8",
            null,
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8",
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8",
            "5f11926cb8be78eb7c59b3a9",
            "5f11926cb8be78eb7c59b3a8"
          ],
          "specialPrice": [
            {
              "shopId1": "5f1ef58e290b0635a4bbf579",
              "price": 55.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a9",
              "price": 9.98
            },
            {
              "shopId1": "5f11926cb8be78eb7c59b3a2",
              "price": 9.65
            }
          ],
          "_id": "5f3d55a5ea834656a0c95421",
          "name": "A new printster product",
          "leadTime": 3,
          "price": 55.98,
          "availability": "Not available",
          "printTemplate": "http://printts.co.uk/yourtemplate",
          "productType": "T-shirt",
          "artWorkTeam": "Copenhagen",
          "artWorkTeamFinal": "wwwwww.",
          "workFlow": "test",
          "weight": 100,
          "generalInfo": "This is a Mug",
          "brand": {
            "_id": "5f3d49443f88f73418b21882",
            "name": "Mringster"
          },
          "packaging": "information about the packaging",
          "printsterSKU": "E7EJJK99",
          "minQty": 0,
          "designService": false,
          "customPackaging": true,
          "customerMessage": "true",
          "customInsert": "true",
          "image": "image_front",
          "isStandardProduct": true,
          "variants": [
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3d55a5ea834656a0c95423",
              "name": "Green / mkl",
              "weight": 200,
              "image": "https://imagetotheProduct.com",
              "colour": "Green",
              "size": "mkl"
            },
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3d582bc63bba2c1c98ef62",
              "name": "Green / mkl",
              "weight": 200,
              "image": "https://imagetotheProduct.com",
              "colour": "Green",
              "size": "mkl"
            },
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3d5847c63bba2c1c98ef7f",
              "name": "Green / mkl",
              "weight": 200,
              "image": "https://imagetotheProduct.com",
              "colour": "Green",
              "size": "mkl"
            },
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3d587d5cd41a4540a37f21",
              "name": "Green / mkl",
              "weight": 200,
              "image": "https://imagetotheProduct.com",
              "colour": "Green",
              "size": "mkl"
            },
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3d58da13c2af2da8f0707e",
              "name": "Green / mkl",
              "weight": 200,
              "image": "https://imagetotheProduct.com",
              "colour": "Green",
              "size": "mkl"
            },
            {
              "printFiles": [],
              "servicesAndUpsells": [],
              "_id": "5f3d5989f110c1339cf40c92",
              "name": "Green / mkl",
              "weight": 200,
              "image": "https://imagetotheProduct.com",
              "colour": "Green",
              "size": "mkl"
            }
          ],
          "__v": 0,
          "id": "5f3d55a5ea834656a0c95421"
        }
        ]
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
    Api.get(`https://afdbea8d0b3b.ngrok.io/api/printsterProducts`, { headers: { 'x-auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw` } })
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