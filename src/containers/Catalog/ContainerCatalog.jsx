import React, { Component } from 'react';
import Api from "../../api";
import { connect } from 'react-redux';
import Catalog from '.';




class ContainerCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productArr: [
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
                        "5f11926cb8be78eb7c59b3a8",
                        "5f1ef58e290b0635a4bbf579"
                    ],
                    "specialPrice": [
                        {
                            "shopId1": "5f1ef58e290b0635a4bbf579",
                            "price": 9.98
                        }
                    ],
                    "_id": "5f2313ad6278a819a4da8fff",
                    "name": "A new printster product",
                    "leadTime": 3,
                    "price": 9.98,
                    "availability": "Not available",
                    "printTemplate": "http://printts.co.uk/yourtemplate",
                    "productType": "T-shirt",
                    "artWorkTeam": "Copenhagen",
                    "artWorkTeamFinal": "wwwwww.",
                    "workFlow": "test",
                    "weight": 100,
                    "generalInfo": "This is a Mug",
                    "brand": "Printster",
                    "packaging": "information about the packaging",
                    "printsterSKU": "E7EJJK99",
                    "minQty": 0,
                    "designService": false,
                    "customPackaging": true,
                    "customerMessage": "true",
                    "customInsert": "true",
                    "image": "image_front",
                    "isStandardProduct": false,
                    "variants": [
                        {
                            "printFiles": [],
                            "servicesAndUpsells": [],
                            "_id": "5f2313ad6278a819a4da9000",
                            "name": "Green / mkl",
                            "brand": "Gildan",
                            "weight": 200,
                            "image": "https://imagetotheProduct.com",
                            "colour": "Green",
                            "size": "mkl"
                        }
                    ],
                    "__v": 0,
                    "id": "5f2313ad6278a819a4da8fff"
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
                            "shopId1": "5f1ef58e290b0635a4bbf579",
                            "price": 9.98
                        }
                    ],
                    "_id": "5f2313a56278a819a4da8ffd",
                    "name": "A new printster product",
                    "leadTime": 3,
                    "price": 9.98,
                    "availability": "Not available",
                    "printTemplate": "http://printts.co.uk/yourtemplate",
                    "productType": "T-shirt",
                    "artWorkTeam": "Copenhagen",
                    "artWorkTeamFinal": "wwwwww.",
                    "workFlow": "test",
                    "weight": 100,
                    "generalInfo": "This is a Mug",
                    "brand": "Printster",
                    "packaging": "information about the packaging",
                    "printsterSKU": "E7EJJK99",
                    "minQty": 0,
                    "designService": false,
                    "customPackaging": true,
                    "customerMessage": "true",
                    "customInsert": "true",
                    "image": "image_front",
                    "isStandardProduct": false,
                    "variants": [
                        {
                            "printFiles": [],
                            "servicesAndUpsells": [],
                            "_id": "5f2313a56278a819a4da8ffe",
                            "name": "Green / mkl",
                            "brand": "Gildan",
                            "weight": 200,
                            "image": "https://imagetotheProduct.com",
                            "colour": "Green",
                            "size": "mkl"
                        }
                    ],
                    "__v": 0,
                    "id": "5f2313a56278a819a4da8ffd"
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
                        "5f11926cb8be78eb7c59b3a8",
                        "5f1ef58e290b0635a4bbf579"
                    ],
                    "specialPrice": [
                        {
                            "shopId1": "5f1ef58e290b0635a4bbf579",
                            "price": 9.98
                        }
                    ],
                    "_id": "5f2313946278a819a4da8ffb",
                    "name": "A new printster product",
                    "leadTime": 3,
                    "price": 9.98,
                    "availability": "Not available",
                    "printTemplate": "http://printts.co.uk/yourtemplate",
                    "productType": "T-shirt",
                    "artWorkTeam": "Copenhagen",
                    "artWorkTeamFinal": "wwwwww.",
                    "workFlow": "test",
                    "weight": 100,
                    "generalInfo": "This is a Mug",
                    "brand": "Printster",
                    "packaging": "information about the packaging",
                    "printsterSKU": "E7EJJK99",
                    "minQty": 0,
                    "designService": false,
                    "customPackaging": true,
                    "customerMessage": "true",
                    "customInsert": "true",
                    "image": "image_front",
                    "isStandardProduct": false,
                    "variants": [
                        {
                            "printFiles": [],
                            "servicesAndUpsells": [],
                            "_id": "5f2313946278a819a4da8ffc",
                            "name": "Green / mkl",
                            "brand": "Gildan",
                            "weight": 200,
                            "image": "https://imagetotheProduct.com",
                            "colour": "Green",
                            "size": "mkl"
                        }
                    ],
                    "__v": 0,
                    "id": "5f2313946278a819a4da8ffb"
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
                        "5f11926cb8be78eb7c59b3a8",
                        "5f1ef58e290b0635a4bbf579"
                    ],
                    "specialPrice": [
                        {
                            "shopId1": "5f1ef58e290bbf579",
                            "price": 9.98
                        }
                    ],
                    "_id": "5f2310e59cfebee8a412387e",
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
                    "brand": "Printster",
                    "packaging": "information about the packaging",
                    "printsterSKU": "E7EJJK99",
                    "minQty": 0,
                    "designService": false,
                    "customPackaging": true,
                    "customerMessage": "true",
                    "customInsert": "true",
                    "image": "image_front",
                    "isStandardProduct": false,
                    "variants": [
                        {
                            "printFiles": [],
                            "servicesAndUpsells": [],
                            "_id": "5f2310e59cfebee8a412387f",
                            "name": "Green / mkl",
                            "brand": "Gildan",
                            "weight": 200,
                            "image": "https://imagetotheProduct.com",
                            "colour": "Green",
                            "size": "mkl"
                        }
                    ],
                    "__v": 0,
                    "id": "5f2310e59cfebee8a412387e"
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
                        "5f11926cb8be78eb7c59b3a8",
                        "5f1ef58e290b0635a4bbf579"
                    ],
                    "specialPrice": [
                        {
                            "shopId1": "5f1ef58e290b0635a4cbf579",
                            "price": 9.98
                        }
                    ],
                    "_id": "5f2310d99cfebee8a412387c",
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
                    "brand": "Printster",
                    "packaging": "information about the packaging",
                    "printsterSKU": "E7EJJK99",
                    "minQty": 0,
                    "designService": false,
                    "customPackaging": true,
                    "customerMessage": "true",
                    "customInsert": "true",
                    "image": "image_front",
                    "isStandardProduct": false,
                    "variants": [
                        {
                            "printFiles": [],
                            "servicesAndUpsells": [],
                            "_id": "5f2310d99cfebee8a412387d",
                            "name": "Green / mkl",
                            "brand": "Gildan",
                            "weight": 200,
                            "image": "https://imagetotheProduct.com",
                            "colour": "Green",
                            "size": "mkl"
                        }
                    ],
                    "__v": 0,
                    "id": "5f2310d99cfebee8a412387c"
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
                        "5f11926cb8be78eb7c59b3a8",
                        "5f1ef58e290b0635a4bbf579"
                    ],
                    "specialPrice": [
                        {
                            "shopId1": "5f1ef58e290b0635a4cbf579",
                            "price": 9.98
                        }
                    ],
                    "_id": "5f2310cf9cfebee8a412387a",
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
                    "brand": "Printster",
                    "packaging": "information about the packaging",
                    "printsterSKU": "E7EJJK99",
                    "minQty": 0,
                    "designService": false,
                    "customPackaging": true,
                    "customerMessage": "true",
                    "customInsert": "true",
                    "image": "image_front",
                    "isStandardProduct": false,
                    "variants": [
                        {
                            "printFiles": [],
                            "servicesAndUpsells": [],
                            "_id": "5f2310cf9cfebee8a412387b",
                            "name": "Green / mkl",
                            "brand": "Gildan",
                            "weight": 200,
                            "image": "https://imagetotheProduct.com",
                            "colour": "Green",
                            "size": "mkl"
                        }
                    ],
                    "__v": 0,
                    "id": "5f2310cf9cfebee8a412387a"
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
                        "5f11926cb8be78eb7c59b3a8",
                        "5f1ef58e290b0635a4bbf579"
                    ],
                    "specialPrice": [
                        {
                            "shopId1": "5f1ef58e290b0635a4bbf579",
                            "price": 9.98
                        }
                    ],
                    "_id": "5f22ca4beef3ee684c044899",
                    "name": "A new printster product",
                    "leadTime": 3,
                    "price": 9.98,
                    "availability": "Not available",
                    "printTemplate": "http://printts.co.uk/yourtemplate",
                    "productType": "T-shirt",
                    "artWorkTeam": "Copenhagen",
                    "artWorkTeamFinal": "wwwwww.",
                    "workFlow": "test",
                    "weight": 100,
                    "generalInfo": "This is a Mug",
                    "brand": "Printster",
                    "packaging": "information about the packaging",
                    "printsterSKU": "E7EJJK99",
                    "minQty": 0,
                    "designService": false,
                    "customPackaging": true,
                    "customerMessage": "true",
                    "customInsert": "true",
                    "image": "image_front",
                    "isStandardProduct": false,
                    "variants": [
                        {
                            "printFiles": [],
                            "servicesAndUpsells": [],
                            "_id": "5f22ca4beef3ee684c04489a",
                            "name": "Green / mkl",
                            "brand": "Gildan",
                            "weight": 200,
                            "image": "https://imagetotheProduct.com",
                            "colour": "Green",
                            "size": "mkl"
                        }
                    ],
                    "__v": 0,
                    "id": "5f22ca4beef3ee684c044899"
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
                        "5f11926cb8be78eb7c59b3a8",
                        "5f1ef58e290b0635a4bbf579"
                    ],
                    "specialPrice": [
                        {
                            "shopId1": "5f1196cb8be78eb7c59b3a9",
                            "price": 50.98
                        },
                        {
                            "shopId1": "5f11926cb8be78eb7c59b3a9",
                            "price": 2.5
                        },
                        {
                            "shopId1": "5f1192cb8be78eb7c59b3a9",
                            "price": 3.98
                        }
                    ],
                    "_id": "5f22c66ce7eee0504097a576",
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
                    "brand": "Printster",
                    "packaging": "information about the packaging",
                    "printsterSKU": "E7EJJK99",
                    "minQty": 0,
                    "designService": false,
                    "customPackaging": true,
                    "customerMessage": "true",
                    "customInsert": "true",
                    "image": "image_front",
                    "isStandardProduct": false,
                    "variants": [
                        {
                            "printFiles": [],
                            "servicesAndUpsells": [],
                            "_id": "5f22c66ce7eee0504097a577",
                            "name": "Green / mkl",
                            "brand": "Gildan",
                            "weight": 200,
                            "image": "https://imagetotheProduct.com",
                            "colour": "Green",
                            "size": "mkl"
                        }
                    ],
                    "__v": 0,
                    "id": "5f22c66ce7eee0504097a576"
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
                        "5f11926cb8be78eb7c59b3a8",
                        "5f1ef58e290b0635a4bbf579"
                    ],
                    "specialPrice": [
                        {
                            "shopId1": "5f11926cb8be78eb7c59b3a9",
                            "price": 9.98
                        }
                    ],
                    "_id": "5f21cb69f4fa0d545c8b5985",
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
                    "brand": "Printster",
                    "packaging": "information about the packaging",
                    "printsterSKU": "E7EJJK99",
                    "minQty": 0,
                    "designService": false,
                    "customPackaging": true,
                    "customerMessage": "true",
                    "customInsert": "true",
                    "image": "image_front",
                    "isStandardProduct": false,
                    "variants": [
                        {
                            "printFiles": [],
                            "servicesAndUpsells": [],
                            "_id": "5f21cb69f4fa0d545c8b5986",
                            "name": "Green / mkl",
                            "brand": "Gildan",
                            "weight": 200,
                            "image": "https://imagetotheProduct.com",
                            "colour": "Green",
                            "size": "mkl"
                        }
                    ],
                    "__v": 0,
                    "id": "5f21cb69f4fa0d545c8b5985"
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
                        "5f11926cb8be78eb7c59b3a8",
                        "5f1ef58e290b0635a4bbf579"
                    ],
                    "specialPrice": [
                        {
                            "shopId1": "5f11926cb8be78eb7c59b3a9",
                            "price": 9.98
                        }
                    ],
                    "_id": "5f21ca906623f0901402f7c1",
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
                    "brand": "Printster",
                    "packaging": "information about the packaging",
                    "printsterSKU": "E7EJJK99",
                    "minQty": 0,
                    "designService": false,
                    "customPackaging": true,
                    "customerMessage": "true",
                    "customInsert": "true",
                    "image": "image_front",
                    "isStandardProduct": false,
                    "variants": [
                        {
                            "printFiles": [],
                            "servicesAndUpsells": [],
                            "_id": "5f21ca906623f0901402f7c2",
                            "name": "Green / mkl",
                            "brand": "Gildan",
                            "weight": 200,
                            "image": "https://imagetotheProduct.com",
                            "colour": "Green",
                            "size": "mkl"
                        }
                    ],
                    "__v": 0,
                    "id": "5f21ca906623f0901402f7c1"
                }
            ],
        }
    }

    componentDidMount() {
        this.productData();

    }

    productData = () => {
        Api.get(`https://e3bc9f7ace78.ngrok.io/api/printsterProducts`, { headers: { 'x-auth-token':  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw` } })
        .then(( data ) => {
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
          <Catalog productArr={this.state.productArr}  />        
          )
      }
    
};

const mapStateToProps = store => {
    return {
    }
  }

export default connect(mapStateToProps)(ContainerCatalog) ;