import React, { PureComponent, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import '../../../scss/component/canvas.scss';
import tShirt from '../../../img/Womens-T-Shirt-Example.png';
import { Link } from 'react-router-dom';
import CanvasTool from './canvasTool';
import CatalogBtn from "./catalogBtn";

import Upload from '../../../img/cloud-backup-up-arrow.svg';
import Text from '../../../img/text.svg';
import Shapes from '../../../img/shapes.svg';
import ClipArts from '../../../img/art.svg';
import Emojis from '../../../img/emojis.svg';
import Draw from '../../../img/draw.svg';
import canvasToImage from 'canvas-to-image';

import CircleRight from '../../../img/circleRight.svg';
import CircleLeft from '../../../img/circleLeft.svg';
import ZoomIn from '../../../img/zoom-in.svg';
import ZoomOut from '../../../img/zoom-out.svg';
import CloudDownload from '../../../img/cloud-computing.svg';
import Print from '../../../img/print.svg';
import SaveIcon from '../../../img/save.svg';


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
    console.log(222, image)
    var image;
    setTimeout(() => {
      image = canvas._objects[0]
    }, 500);
    console.log(226, image)

    this.changeColor = (color, elem) => {
      //add and change current color
      let lastColor = '#fff';
      if (lastColor !== color) {
        image.filters = [];
      }
      image.filters.push(new fabric.Image.filters.BlendColor({
        id:'color',
        color: color,
        mode: 'overlay',
        alpha: 0.6,
        name: 'changeColorProduct'
      }))
      console.log(244, canvas.getActiveObject())
      console.log(245, canvas.getObjects())
      this.setState({ currentColor: color })
      image.applyFilters();
      canvas.add(image);
      canvas.requestRenderAll();
      lastColor = color;

      canvas.getObjects().forEach( element => {
        if(element.cacheKey == 'texture0'){
          canvas.setActiveObject(element)
          var activeObj = canvas.getActiveObject();
          activeObj && canvas.bringToFront(activeObj).discardActiveObject(activeObj).renderAll();
        }
      })

      //console.log(359, canvas.toSVG());
      let middleArr = [...this.state.colorArray]
      let selectedSize = this.state.isSelectSize
      middleArr.map(elem => {
        if (elem.color === color)
          elem.isChecked = !elem.isChecked
      })
      this.setState({
        colorArray: middleArr,
        isSelectSize: !selectedSize,
        isLockSizes: false
      })
      this.addMultiVariants()
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
    this.uploadCustomImg = () => {
      document.getElementById('imgLoader').onchange = function handleImage(e) {
        var reader = new FileReader();
        reader.onload = function (event) {
          console.log('fdsf');
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
        reader.readAsDataURL(e.target.files[0]);
      }
    };

    //save canvas and go step 3
    this.addColors = () => {
      canvas.requestRenderAll();
      localStorage.setItem('canvas', JSON.stringify(canvas));
      window.location.href = '/catalog/product/step/3';
    };
    this.getIndex = () => {
      var activeObj = canvas.getActiveObject();
      console.log(activeObj && canvas.getObjects().indexOf(activeObj));
    }
    this.bringToFront = () => {
      var activeObj = canvas.getActiveObject();
      activeObj && canvas.bringToFront(activeObj).discardActiveObject(activeObj).renderAll();
    }
    this.bringToBack = () => {
      var activeObj = canvas.getActiveObject();
      activeObj && canvas.sendToBack(activeObj).discardActiveObject(activeObj).renderAll();
    }
    document.getElementById('tested').onclick = function () {
      console.log(359, canvas.toSVG());
      let imageColor = canvas.toSVG();
      localStorage.setItem('imageColor', imageColor)
    }

  };
  getIndex(canvas) {
    var activeObj = canvas.getActiveObject();
    console.log(activeObj && canvas.getObjects().indexOf(activeObj));
  }
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
        console.log('fdsf');
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
    console.log(46, this.state.sizeSelected)
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

    console.log(533, this.state.singleVariant)
  }
  addMultiVariants() {
    let count = 0;
    this.state.multiColorArr = [...this.state.colorArray];
    this.state.multiSizeArr = [...this.state.sizeSelected];
    console.log(544, this.state.multiVariant)
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
    console.log(548, this.state.multiVariant)

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

  render() {
    const shape1 = 'https://avatanplus.com/files/resources/original/57cbfb032a6d3156f4cc8466.png';
    const shape2 = 'https://pngimg.com/uploads/circle/circle_PNG44.png';
    const shape3 = 'https://avatanplus.com/files/resources/original/5ac78e8f2840c1629b84df3d.png';
    const shape4 = 'https://avatars.mds.yandex.net/get-pdb/1771637/4d70f4fd-f30c-400d-aae1-d3f984e7c562/s1200?webp=false';
    const shape5 = 'https://avatanplus.com/files/resources/original/57cbfb032a6d3156f4cc8466.png';

    const arts1 = 'https://www.pngitem.com/pimgs/m/37-375858_transparent-free-flourish-clipart-fancy-clipart-png-png.png';
    const arts2 = 'https://www.pinclipart.com/picdir/middle/320-3203349_png-file-clipart.png';
    const arts3 = 'https://www.pinclipart.com/picdir/middle/320-3203349_png-file-clipart.png';
    const arts4 = 'https://www.pinclipart.com/picdir/middle/320-3203349_png-file-clipart.png';

    const emoji1 = 'https://i.pinimg.com/originals/cb/06/cf/cb06cfc39ac3d3c2774433694f47660e.png';
    const emoji2 = 'https://i.pinimg.com/originals/13/c7/3e/13c73e46e0dca5e83650d67305401888.png';
    const emoji3 = 'https://i.pinimg.com/originals/cf/95/f1/cf95f100fc563442c7860f59431f343e.png';
    const emoji4 = 'https://i.pinimg.com/originals/e3/f1/fb/e3f1fb2636225f42bdf2137535636850.png';
    return (
      <div>
        <div className="navigation-canvas">
          <button className='simple-btn' onClick={this.clearStorage} >Clear</button>
          <button className='simple-btn' onClick={() => this.addColors(this.canvasik, this.state.currentColor)}>Next step</button>
          <button onClick={() => this.getIndex(this.canvasik)}>Index</button>
          <button onClick={() => this.bringToFront(this.canvasik)} >bringToFront</button>
          <button onClick={() => this.bringToBack(this.canvasik)} >bringToBack</button>
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
                  <div onClick={() => this.addShapeImage(shape1, this.canvasik)}>
                    <img src={shape1} />
                  </div>
                  <div onClick={() => this.addShapeImage(shape2, this.canvasik)} >
                    <img src={shape2} />
                  </div>
                  <div onClick={() => this.addShapeImage(shape3, this.canvasik)}>
                    <img src={shape3} />
                  </div>
                  <div onClick={() => this.addShapeImage(shape4, this.canvasik)}>
                    <img src={shape4} />
                  </div>
                  <div onClick={() => this.addShapeImage(shape5, this.canvasik)}>
                    <img src={shape5} />
                  </div>
                </div>
                : null}
            </div>
            <div className='addition-tools' onClick={() => this.toggleImageList('cliparts')}>
              <CanvasTool source={ClipArts} name={'CLIPARTS'} height={24} />
              {this.state.showCliparts ?
                <div className='shapes-list'>
                  <div onClick={() => this.addShapeImage(arts1, this.canvasik)}>
                    <img src={arts1} />
                  </div>
                  <div onClick={() => this.addShapeImage(arts2, this.canvasik)}>
                    <img src={arts2} />
                  </div>
                  <div onClick={() => this.addShapeImage(arts3, this.canvasik)}>
                    <img src={arts3} />
                  </div>
                  <div onClick={() => this.addShapeImage(arts4, this.canvasik)}>
                    <img src={arts4} />
                  </div>
                </div>
                : null}
            </div>
            <div className='addition-tools' onClick={() => this.toggleImageList('emoji')}>
              <CanvasTool source={Emojis} name={'EMOJIS'} height={24} />
              {this.state.showEmojis ?
                <div className='shapes-list'>
                  <div onClick={() => this.addShapeImage(emoji1, this.canvasik)}>
                    <img src={emoji1} />
                  </div>
                  <div onClick={() => this.addShapeImage(emoji2, this.canvasik)}>
                    <img src={emoji2} />
                  </div>
                  <div onClick={() => this.addShapeImage(emoji3, this.canvasik)}>
                    <img src={emoji3} />
                  </div>
                  <div onClick={() => this.addShapeImage(emoji4, this.canvasik)}>
                    <img src={emoji4} />
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
            {this.state.sizeArray.map(item => {
              return <button className={`size ${item.isChecked ? 'selectedsize' : 'unselected'}`} disabled={this.state.isLockSizes ? 'disabled' : null} onClick={() => this.selectedSize(item.size)}>{item.size}</button>
            })}
            <div className='addeds-btn'>
              <button className='simple-btn' onClick={() => this.addCompleteSingle()} disabled={this.state.isAddSingle ? null : 'disabled'}>add sizes</button>
            </div>
            <div className='addeds-btn'>
              <button className='simple-btn' onClick={() => this.addCompleteMulti()} disabled={this.state.isAddMulti ? null : 'disabled'}>add all</button>
            </div>
            <div className='allvarients'>
              {this.state.allVariant.map(item => {
                return (
                  <div>
                    <div>Color: {item.option1}</div>
                    <div>Size: {item.option2}</div>
                  </div>)
              })}
            </div>
            <button id="tested">test</button>
            <button onClick={() => this.bringToBack(this.canvasik)} >bringToBack</button>
            <button onClick={() => this.bringToFront(this.canvasik)} >bringToFront</button>
          </div>
        </div>
      </div>
    );
  };

};

export default CanvasPreview;

