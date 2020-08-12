import React, { PureComponent, useState, useReducer } from 'react';
import { Card, Container, Col, Row, CardBody } from 'reactstrap';
import Api from "../../../api";
import Steps from './steps';
import '../../../scss/component/catalogItem.scss';
import '../../../scss/component/canvas.scss';
import CatalogBtn from "./catalogBtn";
import CanvasPreview from './canvas';


class FinalizeProduct extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      sizeArray: [
        { size :'X-S',
          isChecked: false
        },
        {size :'S', 
          isChecked: false
        },
        {size :'M',
          isChecked: false
        },
        {size :'L',
          isChecked: false
        },
        {size :'X-L',
          isChecked: false
        },
        {size :'2-XL',
          isChecked: false
        },
        {size :'3-XL',
          isChecked: false
        },
        {size :'4-XL',
          isChecked: false
        }
      ],
      sizeSelected: [],
      colorArray: [
        {color :'#ABABAB',
       isChecked: false
      },
        {color :'#191919', 
        isChecked: false
      },
        {color :'#462E00', 
        isChecked: false
      },
        {color :'#3E3E3E', 
        isChecked: false
      },
        {color :'#B3D5CB',
        isChecked: false
      },
        {color :'#E2B9A7',
        isChecked: false
      },
        {color :'#CADAD8',
        isChecked: false
      },
        {color :'#DBE2E8',
        isChecked: false
      },
        {color :'#D1C0D4',
        isChecked: false
      },
        {color :'#BFD4B8',
        isChecked: false
      },
        {color :'#DFCABD',
        isChecked: false
      },
        {color :'#E5B2A0',
        isChecked: false
      },
        {color :'#007A53',
        isChecked: false
      },
        {color :'#46612B',
        isChecked: false
      },
        {color :'#1C2449',
        isChecked: false
      },
        {color :'#EA6101',
        isChecked: false
      },
        {color :'#C0001A',
        isChecked: false
      },
        {color :'#FAE3FA',
        isChecked: false
      },
        {color :'#1B0390',
        isChecked: false
      },
        {color :'#2B4AF0',
        isChecked: false
      }
      ],
      isSelectSize: false,

    }
  }
  componentDidMount() { 

  }  
  createProduct = () => {
    let idProduct = localStorage.getItem('idProduct');
    let compliteImage = localStorage.getItem('compliteCanvas');
    let colorsArr = [];
    colorsArr = this.getURLParam('color[]', window.location.href);
    console.log(91, compliteImage)
    let sendArray = {
      "testP": idProduct,
      "shopifyProductId": "",
      
      "shopifyProduct": {
          "title": "V Product - new collection",
          "images": [
              "https://cdn.shoplo.com/9107/products/th2048/abam/3740-1106-1346-14.png",
              compliteImage
          ],
          "image": "https://cdn.shoplo.com/9107/products/th2048/abam/3740-1106-1346-14.png",
          "body_html": "This is a description for the body html",
          "vendor": "9urton vendor",
          "product_type": "New Product Type",
          "tags": [
              "tag1",
              "tag2"
          ],
  
           "variants":[
            {
              "cost":10.80,
              "price":18.80,
              "sku":"",
              "option1":"Blue",
              "option2":"Large",
              "inventory_quantity":20,
              "inventory_management": "Printster"
            },
            {
              "cost":10.80,
              "price":18.80,
              "sku":"",
              "option1":"Black",
              "option2":"X-large",
              "inventory_quantity":20,
              "inventory_management": true
            },
            {
              "cost":10.80,
              "price":18.80,
              "sku":"",
              "option1":"Black",
              "option2":"XX-large",
              "inventory_quantity":20,
              "inventory_management": true
            }
          ],
      "options":[
        {
          "name":"Color",
          "values":colorsArr
        },
        {
          "name":"Size",
          "values": this.state.sizeSelected
        }
      ]
  
      }
  }
  console.log(153, sendArray)

    Api.post(`https://e3bc9f7ace78.ngrok.io/api/linkedProducts/createAndLink`,  
    sendArray,
    { headers: { 'x-auth-token':  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlZjU4ZTI5MGIwNjM1YTRiYmY1NzkiLCJzaG9wTmFtZSI6IlByaW50c3RlclRlc3QiLCJzaG9wRW1haWwiOiJpbmZvQHNvbHZlZXRvLmRrIiwiaXNBZG1pbiI6dHJ1ZSwiYWNjZXNzVG9rZW4iOiJzaHBhdF82NDUwOTMzYTI4MmRmYzlmNTNhMWQ2NTYxOTYyNzAyMiIsInNob3BVcmwiOiJwcmludHN0ZXJ0ZXN0Lm15c2hvcGlmeS5jb20iLCJpYXQiOjE1OTU4NjUxNDN9.KbP1-46OB4Flq4o9fNLP6ncBXnlP1AXBaamiOLjMAqw` } }
    )
      .then(( ) => {
        console.log('send')
        console.log(sendArray)
        })

  }


  addSize(size) {
    let middleArr = [...this.state.sizeArray];
      middleArr.map(elem => {
        if(elem.size === size)
        elem.isChecked = !elem.isChecked
      })
      this.setState({
        sizeArray: middleArr
      })
      console.log(54, this.state.sizeArray)
  }


  getURLParam(key,target){
    var values = [];
    if (!target) target = window.location.href;

    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

    var pattern = key + '=([^&#]+)';
    var o_reg = new RegExp(pattern,'ig');
    while (true){
        var matches = o_reg.exec(target);
        if (matches && matches[1]){
            values.push(matches[1]);
        } else {
            break;
        }
    }

    if (!values.length){
        return null;   
    } else {
        return values.length == 1 ? values[0] : values;
    }
 

  }
  
  selectedSize(size) {
    let middleArr = [...this.state.sizeArray];
      middleArr.map(elem => {
        if(elem.size === size)
        elem.isChecked = !elem.isChecked
      })
      this.setState({
        sizeArray: middleArr
      })
    if(this.state.sizeSelected.includes(size)){
      const index = this.state.sizeSelected.indexOf(size);
      if (index > -1) {
        this.state.sizeSelected.splice(index, 1);
      }
    }else {
      this.state.sizeSelected.push(size)
    }
    this.setState({
      sizeSelected: this.state.sizeSelected
    })
  }

selectColorandSize(color, elem) {
  let middleArr = [...this.state.colorArray];
  let selectedSize = this.state.isSelectSize
  if(selectedSize === false){
  middleArr.map(item => {
    if(item.isChecked === true && item !== elem) {
      item.isChecked = false;
    }
  })
  if(elem.color === color){
    elem.isChecked = !elem.isChecked
  }
  this.setState({
    colorArray: middleArr,
    isSelectSize: !selectedSize
  })
  } else {
    middleArr.map(item => {
      if(item.isChecked === true && item !== elem) {
        item.isChecked = false;    
      }
    })
    if(elem.color === color){
      elem.isChecked = !elem.isChecked
    }
    this.setState({
      colorArray: middleArr,
    })
  }
}


render() {
return(
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <Steps isActivebar={3} />
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <CardBody className='finalize--container'>
          <Col md={6}>
            <Card>
              <div className="title-design">Product options and variations</div>
              <div className="descr-design">Choose which variations and options you want to offer you customers</div>
              <div className="canvas-container-finalize">
                <CanvasPreview />
              </div>
              {/* <div className='color-select'>
                {this.state.colorArray.map((item, ind) => { 
                  return <div className={`color-block color${ind + 1} ${item.isChecked ? 'selectedColor' : '' }`} onClick={() => this.selectColorandSize(item.color, item)}></div>
                })}
              </div> */}
              {/* {this.state.isSelectSize ? <div className='choose-size'>
                {this.state.sizeArray.map((item, ind) => { 
                  return <div className={`size ${item.isChecked ? 'selectedsize' : 'unselected' }`} onClick={() => this.selectedSize(item.size)}>{item.size}</div>
                })}
                <div>
                  <CatalogBtn nameButton={'add sizes'}></CatalogBtn>
                </div>
              </div> : <div>Pick a color</div>} */}
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <div className="title-design">Describe your product</div>
              <div className="descr-design">Describe your product and set a price on it, and you are ready to sell</div>
              <div className="help-design--container">
                <div className="title-option">Kids Polo</div>
                <div className="option-block">
                  <div className="first-block">Title</div>
                  <div>
                    <input type='text' placeholder="Kids Polo - Design by" />
                  </div>
                </div>
                <div className="option-block">
                  <div className="first-block">Description</div>
                  <div>
                    <textarea rows="10" cols="45" placeholder="100% Polyester">

                    </textarea>
                  </div>
                </div>
                <div className="option-block">
                  <div className="first-block">Brand</div>
                  <div>
                    <select>
                      <option value="Your brand" selected>Your brand</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                    </select>
                  </div>
                </div>
                <div className="label-block">Label</div>
                <div className="option-block">
                  <div className="first-block">Resale Price</div>
                  <div>
                    <input type='text' placeholder="£10.99" />
                  </div>
                </div>
                <div className="option-block">
                  <div className="first-block">Shipping Profile</div>
                  <div>
                    <select>
                      <option value="Choose profile" selected>Choose profile</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                    </select>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </CardBody>
      </Col>
      <div className="btn--container">
        <div onClick={this.createProduct}>
          <CatalogBtn nameButton={'Create'} />
        </div>
      </div>
    </Row>
  </Container>
  );
}
};

export default FinalizeProduct;