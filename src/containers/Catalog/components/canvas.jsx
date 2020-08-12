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
      stepquery: '',
      currentColor: '',
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
      isSelectSize: false,


    }
    this.canvasRender = this.canvasRender.bind(this);
    this.canvasik = '';
    this.props = props

    
  }


  componentDidMount() {
    this.canvasik = new fabric.Canvas('c');
    this.canvasRender()

  }


  canvasRender() {

    let canvas = this.canvasik
    if (localStorage.getItem('canvas') === null) {
      var image;
      var imgEl = document.createElement('img');
      imgEl.crossOrigin = 'anonymous';
      imgEl.src = tShirt;
      imgEl.onload = function () {
        image = new fabric.Image(imgEl);
        image.set({
          left: 150,
          top: 20,
        }).scale(1);
        image.selectable = false;

        image.scaleToHeight(300);
        image.scaleToWidth(300);
        canvas.add(image);
        canvas.moveTo(image, 1);
        image.moveTo(1);
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
      let lastColor = '#fff';
      if (lastColor !== color) {
        image.filters = [];
      }
      image.filters.push(new fabric.Image.filters.BlendColor({
        color: color,
        mode: 'overlay',
        alpha: 0.6
      }))
      this.setState({currentColor: color})
      image.applyFilters();
      canvas.add(image);
      canvas.requestRenderAll();
      lastColor = color;

      // let middleArr = [];
      // middleArr = this.state.colorArray
      // middleArr.map(elem => {
      //   if(elem.color === color)
      //   elem.isChecked = !elem.isChecked
      // })
      // this.setState({
      //   colorArray: middleArr
      // })
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


    };

    this.addShapeImage = (image, canvas) => {
      var imgURL = image;
      var pugImg = document.createElement('img');
      pugImg.crossOrigin = 'anonymous';
      pugImg.onload = function() {    
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

    this.addText = () => {
      let textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
        left: 100,
        top: 50,
        width: 150,
        fontSize: 20,
        fill: 'black'
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
              cornersize: 10
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
    this.addColors = () =>  {
      canvas.requestRenderAll();
      let urlString = '?'
      this.state.colorArray.forEach(index=>{
        if(index.isChecked === true){
          urlString = urlString + 'color[]=' + index.color + '&'
        }
      })
      this.setState({stepquery: urlString})
      let compliteImage = canvas.toDataURL("image/jpg");
      localStorage.setItem('compliteCanvas', compliteImage)
      localStorage.setItem('canvas', JSON.stringify(canvas))
      localStorage.setItem('mainColor', this.state.currentColor)   
      window.location.href = '/catalog/product/step/3' + urlString.replace(/#/g, '');
    };

  };
  //add color for step 3
  addColors(canvas, mainColor) {
    canvas.requestRenderAll();
    let compliteImage = canvas.toDataURL("image/png");
    localStorage.setItem('compliteCanvas', compliteImage)
    localStorage.setItem('canvas', JSON.stringify(canvas))
    localStorage.setItem('mainColor', mainColor)
    let urlString = '?'
    this.state.colorArray.forEach(index=>{
      if(index.isChecked === true){
        urlString = urlString + 'color[]=' + index.color 
      }
    })
    this.setState({stepquery: urlString})
      console.log(251, this.state.stepquery)
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
    var pugImg = new Image();
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

// selectColorandSize(color, elem) {
//   let middleArr = [...this.state.colorArray];
//   let selectedSize = this.state.isSelectSize
//   if(selectedSize === false){
//   middleArr.map(item => {
//     if(item.isChecked === true && item !== elem) {
//       item.isChecked = false;
//     }
//   })
//   if(elem.color === color){
//     elem.isChecked = !elem.isChecked
//   }
//   this.setState({
//     colorArray: middleArr,
//     isSelectSize: !selectedSize
//   })
//   } else {
//     middleArr.map(item => {
//       if(item.isChecked === true && item !== elem) {
//         item.isChecked = false;    
//       }
//     })
//     if(elem.color === color){
//       elem.isChecked = !elem.isChecked
//     }
//     this.setState({
//       colorArray: middleArr,
//     })
//   }
// }

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

    console.log(299, this.state.currentColor)
    return (
      <div> 
        <div className="navigation-canvas">
          <button className='simple-btn' onClick={this.clearStorage} >Clear</button>
            <button className='simple-btn' onClick={() => this.addColors(this.canvasik, this.state.currentColor)}>Next step</button>
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
                  <div onClick={() => this.addShapeImage(shape1 ,this.canvasik)}>
                    <img src={shape1} />
                  </div>
                  <div onClick={() => this.addShapeImage(shape2 ,this.canvasik)} >
                    <img src={shape2} />
                  </div>
                  <div onClick={() => this.addShapeImage(shape3 ,this.canvasik)}>
                    <img src={shape3} />
                  </div>
                  <div onClick={() => this.addShapeImage(shape4 ,this.canvasik)}>
                    <img src={shape4} />
                  </div>
                  <div onClick={() => this.addShapeImage(shape5 ,this.canvasik)}>
                    <img src={shape5} />
                  </div>
                </div>
                : null}
            </div>
            <div className='addition-tools' onClick={() => this.toggleImageList('cliparts')}>
              <CanvasTool source={ClipArts} name={'CLIPARTS'} height={24} />
              {this.state.showCliparts ?
                <div className='shapes-list'>
                  <div onClick={() => this.addShapeImage(arts1 ,this.canvasik)}>
                    <img src={arts1} />
                  </div>
                  <div onClick={() => this.addShapeImage(arts2 ,this.canvasik)}>
                    <img src={arts2} />
                  </div>
                  <div onClick={() => this.addShapeImage(arts3 ,this.canvasik)}>
                    <img src={arts3} />
                  </div>
                  <div onClick={() => this.addShapeImage(arts4 ,this.canvasik)}>
                    <img src={arts4} />
                  </div>
                </div>
                : null}
            </div>
            <div className='addition-tools' onClick={() => this.toggleImageList('emoji')}>
              <CanvasTool source={Emojis} name={'EMOJIS'} height={24} />
              {this.state.showEmojis ?
                <div className='shapes-list'>
                 <div onClick={() => this.addShapeImage(emoji1 ,this.canvasik)}>
                    <img src={emoji1} />
                 </div>
                 <div onClick={() => this.addShapeImage(emoji2 ,this.canvasik)}>
                    <img src={emoji2} />
                 </div>
                 <div onClick={() => this.addShapeImage(emoji3 ,this.canvasik)}>
                    <img src={emoji3} />
                 </div>
                 <div onClick={() => this.addShapeImage(emoji4 ,this.canvasik)}>
                    <img src={emoji4} />
                 </div>
                </div>
                : null}
            </div>
            <div>
              <CanvasTool source={Draw} name={'DRAW'} height={24} />
            </div>
          </div>
          <div className='canvas-containers'>
            <canvas id="c" width={650} height={350}></canvas>
          </div>
        </div>
        <div className='canvas-instruments--container'>
          <div className='option-tools'>
            <CanvasTool source={CircleRight} name={''} height={14} />
            <CanvasTool source={CircleLeft} name={''} height={14} />
            <CanvasTool source={ZoomIn} name={''} height={14} />
            <CanvasTool source={ZoomOut} name={''} height={14} />
            <CanvasTool source={CloudDownload} name={''} height={14} />
            <CanvasTool source={Print} name={''} height={14} />
            <CanvasTool source={SaveIcon} name={''} height={14} />
          </div>
          <div className='color-select'>
            {this.state.colorArray.map((item, ind) => { 
              return <div className={`color-block color${ind + 1} ${item.isChecked ? 'selectedColor' : '' }`} onClick={() => this.changeColor(item.color, item)}></div>
            })}
          </div>
          {this.state.isSelectSize ? <div className='choose-size'>
            {this.state.sizeArray.map((item, ind) => { 
              return <div className={`size ${item.isChecked ? 'selectedsize' : 'unselected' }`} onClick={() => this.selectedSize(item.size)}>{item.size}</div>
            })}
            <div>
              <CatalogBtn nameButton={'add sizes'}></CatalogBtn>
            </div>
          </div> : <div className='pick-color'>Pick a color</div>}
        </div>
      </div>
    );
  };

};

export default CanvasPreview;

