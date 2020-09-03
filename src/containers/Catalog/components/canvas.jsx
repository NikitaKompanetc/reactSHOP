import React, { PureComponent, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import '../../../scss/component/canvas.scss';
import tShirt from '../../../img/Womens-T-Shirt-Example.png';
import { Link } from 'react-router-dom';
import CanvasTool from './canvasTool';
import CatalogBtn from "./catalogBtn";


import Shape1 from '../../../img/figure1.png';
import Shape2 from '../../../img/figure2.png';
import Shape3 from '../../../img/figure3.png';
import Shape4 from '../../../img/figure4.png';
import Shape5 from '../../../img/figure5.png';

import Arts1 from '../../../img/shape1.png';
import Arts2 from '../../../img/shape4.png';

import Emoji1 from '../../../img/emoji1.png';
import Emoji2 from '../../../img/emoji2.png';
import Emoji3 from '../../../img/emoji3.png';
import Emoji4 from '../../../img/emoji4.png';

import Upload from '../../../img/cloud-backup-up-arrow.svg';
import Text from '../../../img/text.svg';
import Shapes from '../../../img/shapes.svg';
import ClipArts from '../../../img/art.svg';
import Emojis from '../../../img/emojis.svg';

import svg_to_png from 'svg-to-png';
import convertImage from './step3/convertImages';





class CanvasPreview extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      functionsArr: [],
      showImages: false,
      showCliparts: false,
      showEmojis: false,
      isSelectSize: false,
      isAddSingle: false,
      isAddMulti: false,
      isLockSizes: true,

      stepquery: '',
      currentColor: '',
      colorArray: [
        {
          color: '#ABABAB',
          isChecked: false
        },
        {
          color: '#191919',
          isChecked: false
        },
        {
          color: '#462E00',
          isChecked: false
        },
        {
          color: '#3E3E3E',
          isChecked: false
        },
        {
          color: '#B3D5CB',
          isChecked: false
        },
        {
          color: '#E2B9A7',
          isChecked: false
        },
        {
          color: '#CADAD8',
          isChecked: false
        },
        {
          color: '#DBE2E8',
          isChecked: false
        },
        {
          color: '#D1C0D4',
          isChecked: false
        },
        {
          color: '#BFD4B8',
          isChecked: false
        },
        {
          color: '#DFCABD',
          isChecked: false
        },
        {
          color: '#E5B2A0',
          isChecked: false
        },
        {
          color: '#007A53',
          isChecked: false
        },
        {
          color: '#46612B',
          isChecked: false
        },
        {
          color: '#1C2449',
          isChecked: false
        },
        {
          color: '#EA6101',
          isChecked: false
        },
        {
          color: '#C0001A',
          isChecked: false
        },
        {
          color: '#FAE3FA',
          isChecked: false
        },
        {
          //color: '#1B0390',
          color: 'blue',
          isChecked: false
        },
        {
          //color: '#2B4AF0',
          color: 'lightblue',
          isChecked: false
        }
      ],
      sizeArray: [
        {
          size: 'X-S',
          isChecked: false
        },
        {
          size: 'S',
          isChecked: false
        },
        {
          size: 'M',
          isChecked: false
        },
        {
          size: 'L',
          isChecked: false
        },
        {
          size: 'X-L',
          isChecked: false
        },
        {
          size: '2-XL',
          isChecked: false
        },
        {
          size: '3-XL',
          isChecked: false
        },
        {
          size: '4-XL',
          isChecked: false
        }
      ],
      sizeSelected: [],
      singleVariant: [],
      multiVariant: [],
      allVariant: [],
      multiSizeArr: [],
      multiColorArr: [],
      productColorArr: [],

      imagesArr: []
    }
    this.canvasRender = this.canvasRender.bind(this);
    this.canvasik = '';
    this.props = props


  }


  componentDidMount() {
    this.canvasik = new fabric.Canvas('c');
    // this.canvasik = new fabric.Canvas('c', {
    //   isDrawingMode: true
    // });
    this.canvasRender()
    this.addSingleVariants()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.singleVariant !== this.state.singleVariant) {
      this.addSingleVariants()
    }
  }

  canvasRender() {
    //add main canvas
    let canvas = this.canvasik
    if (localStorage.getItem('canvas') === null) {
      var image;
      var imgEl = document.createElement('img');
      //imgEl.crossOrigin = 'anonymous';
      imgEl.setAttribute('crossorigin', 'anonymous');
      imgEl.src = tShirt;
      imgEl.onload = function () {
        image = new fabric.Image(imgEl);
        image.set({
          left: 150,
          top: 20,
          selectable: false,
          lockMovementX: true,
          lockMovementY: true,
          hasControls: false,
          hasBorders: false,
          name: 'product'
        }).scale(1);
        image.selectable = false;

        image.scaleToHeight(300);
        image.scaleToWidth(300);
        canvas.add(image);

      }

      canvas.requestRenderAll();
    } else {
      canvas.loadFromJSON(localStorage.getItem('canvas'), canvas.renderAll.bind(canvas));
    }
    var image;
    setTimeout(() => {
      image = canvas._objects[0]
    }, 500);
    this.changeColor = (color, elem) => {
      //add and change current color
      let lastColor = '#fff';
      if (lastColor !== color) {
        image.filters = [];
      }
      //add color
      image.filters.push(new fabric.Image.filters.BlendColor({
        id: 'color',
        color: color,
        mode: 'overlay',
        alpha: 0.6,
        name: 'changeColorProduct',
        hasControls: false,
        hasBorders: false,
      }))
      this.setState({ currentColor: color })
      image.applyFilters();
      canvas.add(image);
      canvas.requestRenderAll();
      lastColor = color;

      //Move product under images
      let lastObject = [];
      canvas.getObjects().forEach(element => {
        let a = element.cacheKey
        if (a !== undefined) {
          let cacheValue = element.cacheKey.replace(/\D/g, "");
          lastObject.push(cacheValue)
        }

        if (element.cacheKey !== `texture${lastObject[0]}`) {
          canvas.setActiveObject(element)
          var activeObj = canvas.getActiveObject();
          activeObj && canvas.bringToFront(activeObj).discardActiveObject(activeObj).renderAll();
        }
      })

      //check selected colors
      let middleArr = [...this.state.colorArray]
      let selectedSize = this.state.isSelectSize
      middleArr.map(elem => {
        if (elem.color === color)
          elem.isChecked = !elem.isChecked
      });
      //add dataURL colors for POST
      if (this.state.productColorArr.some(element => element['color'] === color) === false) {
        let url = canvas.toDataURL()
        let colorUrl = {
          color: color,
          dataUrl: url
        }

        this.state.productColorArr.push(colorUrl)

      } else {
        let removeColor = this.state.productColorArr.findIndex(element => element.color === color)

        this.state.productColorArr.splice(removeColor, 1)
      }

      //set all value
      this.setState({
        colorArray: middleArr,
        isSelectSize: !selectedSize,
        isLockSizes: false
      });
      this.addMultiVariants();
    };



    this.addShapeImage = (image, canvas) => {
      var imgURL = image;
      var pugImg = document.createElement('img');
      pugImg.setAttribute('crossorigin', 'anonymous');
      pugImg.onload = function () {
        var pug = new fabric.Image(pugImg, {
          id: 'image',
          angle: 45,
          width: 500,
          height: 500,
          left: 50,
          top: 70,
          scaleX: .25,
          scaleY: .25,
          name: 'addShapeImage'
        });
        canvas.add(pug);
      };

      pugImg.src = imgURL;
    }
    //add text input in canvas
    this.addText = () => {
      let textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
        left: 100,
        top: 50,
        width: 150,
        fontSize: 20,
        fill: 'black',
        name: 'addText'
      });
      canvas.add(textbox);

      canvas.requestRenderAll();
    };
    //add custom image
    this.uploadCustomImg = () => {
      document.getElementById('imgLoader').onchange = function handleImage(e) {
        var reader = new FileReader();
        reader.onload = function (event) {
          var imgObj = new Image();
          imgObj.src = event.target.result;
          imgObj.onload = function () {
            // start fabricJS stuff
            var image = new fabric.Image(imgObj);
            image.set({
              left: 30,
              top: 30,
              angle: 20,
              padding: 10,
              cornersize: 10,
              name: 'uploadImage'
            });
            //image.scale(getRandomNum(0.1, 0.25)).setCoords();
            canvas.add(image);
            // end fabricJS stuff
          }

        }
        //Move product under images
        // canvas.getObjects().forEach(element => {
        //   if (element.cacheKey == 'texture0') {
        //     canvas.setActiveObject(element)
        //     var activeObj = canvas.getActiveObject();
        //     activeObj && canvas.bringToFront(activeObj).discardActiveObject(activeObj).renderAll();
        //   }
        // })
        reader.readAsDataURL(e.target.files[0]);
      }
    };

    //save canvas and go step 3
    this.addColors = () => {
      canvas.requestRenderAll();
      localStorage.setItem('canvas', JSON.stringify(canvas));
      //window.location.href = '/catalog/product/step/3';
    };
    // this.getIndex = () => {
    //   var activeObj = canvas.getActiveObject();
    //   console.log(activeObj && canvas.getObjects().indexOf(activeObj));
    // }
    // this.bringToFront = () => {
    //   var activeObj = canvas.getActiveObject();
    //   activeObj && canvas.bringToFront(activeObj).discardActiveObject(activeObj).renderAll();
    // }
    // this.bringToBack = () => {
    //   var activeObj = canvas.getActiveObject();
    //   activeObj && canvas.sendToBack(activeObj).discardActiveObject(activeObj).renderAll();
    // }
    // this.clearCanvas = () => {
    //   let image = canvas.toDataURL()
    //   console.log(332, image)
    // }

  };
  //end canvas function
  // getIndex(canvas) {
  //   var activeObj = canvas.getActiveObject();
  //   console.log(activeObj && canvas.getObjects().indexOf(activeObj));
  // }
  bringToFront(canvas) {
    var activeObj = canvas.getActiveObject();
    activeObj && canvas.bringToFront(activeObj).discardActiveObject(activeObj).renderAll();
  }
  bringToBack(canvas) {
    var activeObj = canvas.getActiveObject();
    activeObj && canvas.sendToBack(activeObj).discardActiveObject(activeObj).renderAll();
  }
  //add color for step 3
  addColors(canvas, mainColor) {
    canvas.requestRenderAll();
    localStorage.setItem('canvas', JSON.stringify(canvas))
  }
  //clear product area
  clearStorage() {
    localStorage.removeItem('canvas')
    localStorage.removeItem('mainColor')
    localStorage.removeItem('selectedColor')
    window.location.reload();
  };
  //add text on product
  addText(canvas) {
    if (canvas) {
      let textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
        left: 100,
        top: 50,
        width: 150,
        fontSize: 20,
        fill: 'black'
      });
      canvas.add(textbox);
      canvas.requestRenderAll();
      return canvas;
    };
  };
  //add custom image or svg
  uploadCustomImg(canvas) {
    document.getElementById('imgLoader').onchange = function handleImage(e) {
      var reader = new FileReader();
      reader.onload = function (event) {

        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
          // start fabricJS stuff

          var image = new fabric.Image(imgObj);
          image.set({
            left: 0,
            top: 0,
            angle: 20,
            padding: 10,
            cornersize: 10
          });
          //image.scale(getRandomNum(0.1, 0.25)).setCoords();
          canvas.add(image);

          // end fabricJS stuff
        }

      }
      reader.readAsDataURL(e.target.files[0]);
    };
  };

  addShapeImage(image, canvas) {
    var imgURL = image;
    // var pugImg = new Image();
    var pugImg = document.createElement('img');
    pugImg.crossOrigin = 'Anonymous';
    pugImg.onload = function (img) {
      var pug = new fabric.Image(pugImg, {
        angle: 45,
        width: 500,
        height: 500,
        left: 50,
        top: 70,
        scaleX: .25,
        scaleY: .25
      });
      canvas.add(pug);
    };
    pugImg.src = imgURL;
  }
  //toggle image tools
  toggleImageList = (toggle) => {
    const { showImages, showCliparts, showEmojis } = this.state;
    switch (toggle) {
      case 'shapes':
        this.setState({
          showImages: !showImages
        })
        break;
      case 'cliparts':
        this.setState({
          showCliparts: !showCliparts
        })
        break;
      case 'emoji':
        this.setState({
          showEmojis: !showEmojis
        })
        break;
    }
  };
  //change color product
  changeColor(canvas, currentColor) {
    let image;
    let lastColor = '#fff'
    if (lastColor !== currentColor) {
      image.filters = [];
    }
    image.filters.push(new fabric.Image.filters.BlendColor({
      color: currentColor,
      mode: 'overlay',
      alpha: 0.6
    }))
    currentColor = this.state.currentColor;
    image.applyFilters();
    canvas.add(image);
    canvas.requestRenderAll();
    lastColor = currentColor

  };


  //step 3 functions 
  selectedSize(size) {
    let middleArr = [...this.state.sizeArray];
    middleArr.map(elem => {
      if (elem.size === size)
        elem.isChecked = !elem.isChecked
    })
    this.setState({
      sizeArray: middleArr
    })
    if (this.state.sizeSelected.includes(size)) {
      const index = this.state.sizeSelected.indexOf(size);
      if (index > -1) {
        this.state.sizeSelected.splice(index, 1);
      }
    } else {
      this.state.sizeSelected.push(size)
    }
    this.setState({
      sizeSelected: this.state.sizeSelected
    })

    this.addSingleVariants()
    this.addMultiVariants()
  }

  addSingleVariants() {
    let singleColorArr = [...this.state.colorArray];
    const singleColor = singleColorArr.find(item => item.isChecked === true)
    if (singleColor === undefined || singleColor === null) {
      return
    } else {
      this.state.singleVariant = []
      this.state.singleVariant.push(singleColor)
    }
    if (this.state.sizeSelected.length === 1) {
      this.setState({
        singleVariant: this.state.singleVariant,
        isAddSingle: true
      })
    }
    else {
      this.setState({
        isAddMulti: true,
        isAddSingle: false
      })
    }


  }
  addMultiVariants() {
    let count = 0;
    this.state.multiColorArr = [...this.state.colorArray];
    this.state.multiSizeArr = [...this.state.sizeSelected];

    this.state.multiColorArr.forEach(el => {
      if (el.isChecked === true) {
        if (this.state.multiVariant.includes(el.color) === false) {
          this.state.multiVariant.push(el.color)
        } else {
          return
        }
        count++
      }

    })


    if (this.state.sizeSelected.length >= 2 || count >= 2) {
      this.setState({
        isAddMulti: true,
        isAddSingle: false
      })
    } else {
      this.setState({
        isAddMulti: false,
        isAddSingle: true
      })
    }
  }
  addCompleteSingle() {
    let variant = {
      "cost": 10.80,
      "price": 18.80,
      "sku": "",
      "option1": this.state.singleVariant[0].color,
      "option2": this.state.sizeSelected[0],
      "inventory_quantity": 20,
      "inventory_management": "Printster"
    }
    this.state.allVariant.push(variant)
    localStorage.setItem('allVariants', JSON.stringify(this.state.allVariant))

    //clear values
    this.state.colorArray.forEach(el => {
      el.isChecked = false
    })
    this.state.sizeArray.forEach(el => {
      el.isChecked = false
    })
    this.setState({
      colorArr: this.state.colorArray,
      sizeArr: this.state.sizeArray,
      isAddSingle: false,
      isAddMulti: false
    })
    this.state.singleVariant = [];
    this.state.sizeSelected = [];
  }
  addCompleteMulti() {
    localStorage.setItem('productColors', JSON.stringify(this.state.productColorArr))
    let sizeArr = this.state.multiSizeArr
    let colorArr = this.state.multiVariant
    sizeArr.forEach((size, ind) => {
      colorArr.forEach((color, ind) => {
        let variant = {
          "cost": 10.80,
          "price": 18.80,
          "sku": "",
          "option1": color,
          "option2": size,
          "inventory_quantity": 20,
          "inventory_management": "Printster"
        }
        this.state.allVariant.push(variant)
      })

    })
    localStorage.setItem('allVariants', JSON.stringify(this.state.allVariant))
    //clear values
    this.state.colorArray.forEach(el => {
      el.isChecked = false
    })
    this.state.sizeArray.forEach(el => {
      el.isChecked = false
    })
    this.setState({
      colorArr: this.state.colorArray,
      sizeArr: this.state.sizeArray,
      isAddSingle: false,
      isAddMulti: false
    })
    this.state.multiSizeArr = [];
    this.state.multiVariant = [];
  }
  convertImage() {
    //let colorProduct = localStorage.getItem('imageColor');
    convertImage();

  }

  render() {
    return (
      <div>
        <div className="navigation-canvas">
          <button className='simple-btn' onClick={this.clearStorage} >Clear</button>
          <Link to={{
            pathname: "/catalog/product/step/3"
          }}> <button className='simple-btn' onClick={() => this.addColors(this.canvasik, this.state.currentColor)}>Next step</button></Link>
        </div>
        <div className='canvas--container'>
          <div className="tools-canvas-container">
            <div>
              <label for="imgLoader">
                <CanvasTool source={Upload} name={'UPLOAD'} height={24} />
              </label>
              <input type="file" name="photo" id="imgLoader" onClick={() => this.uploadCustomImg(this.canvasik)} />
            </div>
            <div onClick={() => this.addText(this.canvasik)}>
              <CanvasTool source={Text} name={'TEXT'} height={24} />
            </div>
            <div className='addition-tools' onClick={() => this.toggleImageList('shapes')}>
              <CanvasTool source={Shapes} name={'SHAPES'} height={24} />
              {this.state.showImages ?
                <div className='shapes-list'>
                  <div onClick={() => this.addShapeImage(Shape1, this.canvasik)}>
                    <img src={Shape1} />
                  </div>
                  <div onClick={() => this.addShapeImage(Shape2, this.canvasik)} >
                    <img src={Shape2} />
                  </div>
                  <div onClick={() => this.addShapeImage(Shape3, this.canvasik)}>
                    <img src={Shape3} />
                  </div>
                  <div onClick={() => this.addShapeImage(Shape4, this.canvasik)}>
                    <img src={Shape4} />
                  </div>
                  <div onClick={() => this.addShapeImage(Shape5, this.canvasik)}>
                    <img src={Shape5} />
                  </div>
                </div>
                : null}
            </div>
            <div className='addition-tools' onClick={() => this.toggleImageList('cliparts')}>
              <CanvasTool source={ClipArts} name={'CLIPARTS'} height={24} />
              {this.state.showCliparts ?
                <div className='shapes-list'>
                  <div onClick={() => this.addShapeImage(Arts1, this.canvasik)}>
                    <img src={Arts1} />
                  </div>
                  <div onClick={() => this.addShapeImage(Arts2, this.canvasik)}>
                    <img src={Arts2} />
                  </div>
                  <div onClick={() => this.addShapeImage(Arts1, this.canvasik)}>
                    <img src={Arts1} />
                  </div>
                  <div onClick={() => this.addShapeImage(Arts2, this.canvasik)}>
                    <img src={Arts2} />
                  </div>
                </div>
                : null}
            </div>
            <div className='addition-tools' onClick={() => this.toggleImageList('emoji')}>
              <CanvasTool source={Emojis} name={'EMOJIS'} height={24} />
              {this.state.showEmojis ?
                <div className='shapes-list'>
                  <div onClick={() => this.addShapeImage(Emoji1, this.canvasik)}>
                    <img src={Emoji1} />
                  </div>
                  <div onClick={() => this.addShapeImage(Emoji2, this.canvasik)}>
                    <img src={Emoji2} />
                  </div>
                  <div onClick={() => this.addShapeImage(Emoji3, this.canvasik)}>
                    <img src={Emoji3} />
                  </div>
                  <div onClick={() => this.addShapeImage(Emoji4, this.canvasik)}>
                    <img src={Emoji4} />
                  </div>
                </div>
                : null}
            </div>
            {/* <div>
              <CanvasTool source={Draw} name={'DRAW'} height={24} />
            </div> */}
          </div>
          <div className='canvas-containers'>
            <canvas id="c" width={650} height={350}></canvas>
          </div>
        </div>
        <div className='canvas-instruments--container'>
          {/* <div className='option-tools'>
            <CanvasTool source={CircleRight} name={''} height={14} />
            <CanvasTool source={CircleLeft} name={''} height={14} />
            <CanvasTool source={ZoomIn} name={''} height={14} />
            <CanvasTool source={ZoomOut} name={''} height={14} />
            <CanvasTool source={CloudDownload} name={''} height={14} />
            <CanvasTool source={Print} name={''} height={14} />
            <CanvasTool source={SaveIcon} name={''} height={14} />
          </div> */}
          <div className='color-select'>
            {this.state.colorArray.map((item, ind) => {
              return <div className={`color-block color${ind + 1} ${item.isChecked ? 'selectedColor' : ''}`} onClick={() => this.changeColor(item.color, item)}></div>
            })}
          </div>
          <div className='choose-size'>
            <div>
              {this.state.sizeArray.map(item => {
                return <button className={`size ${item.isChecked ? 'selectedsize' : 'unselected'}`} disabled={this.state.isLockSizes ? 'disabled' : null} onClick={() => this.selectedSize(item.size)}>{item.size}</button>
              })}
              <div className='addeds-btn'>
                <button className='simple-btn' onClick={() => this.addCompleteSingle()} disabled={this.state.isAddSingle ? null : 'disabled'}>add sizes</button>
              </div>
              <div className='addeds-btn'>
                <button className='simple-btn' onClick={() => this.addCompleteMulti()} disabled={this.state.isAddMulti ? null : 'disabled'}>add all</button>
              </div>
            </div>
            <div>
              <div className='allvarients'>
                {this.state.allVariant.map(item => {
                  return (
                    <div className='item-variant'>
                      <div>Color: {item.option1}</div>
                      <div>Size: {item.option2}</div>
                    </div>
                  )
                })
                }
              </div>
            </div>
            {/* <button id="tested">test</button>
            <button onClick={() => this.convertImage()}>convert image</button>
            <button onClick={() => this.bringToBack(this.canvasik)} >bringToBack</button>
            <button onClick={() => this.bringToFront(this.canvasik)} >bringToFront</button> */}
          </div>
        </div>
      </div>
    );
  };

};

export default CanvasPreview;