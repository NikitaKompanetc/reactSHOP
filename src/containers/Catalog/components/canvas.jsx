import React, { PureComponent, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import '../../../scss/component/canvas.scss';
import tShirt from '../../../img/Womens-T-Shirt-Example.png';
import { Link } from 'react-router-dom';


class CanvasPreview extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.canvasRender = this.canvasRender.bind(this);
    this.canvasik = ''
    console.log(document.getElementById('c'))
    
  }


  componentDidMount() {
    this.canvasik = new fabric.Canvas('c');
    this.canvasRender()
    
  }


  canvasRender() {
    let canvas = this.canvasik
    if(localStorage.getItem('canvas') === null){
    var image;
    var imgEl = document.createElement('img');
    imgEl.crossOrigin = 'anonymous';
    imgEl.src = tShirt;
    imgEl.onload = function () {
      image = new fabric.Image(imgEl);
      image.set({
        left: 150,
        top: 50,
      }).scale(1);
      image.hasControls = false;
      image.hasBorders = false;
      image.lockMovementX = true;
      image.lockMovementY = true;
      image.lockRotation = true;
      
      image.scaleToHeight(300);
      image.scaleToWidth(300);
      canvas.add(image);
      canvas.moveTo(image, 1);
      image.moveTo(1);
    }
      
      canvas.requestRenderAll();
    }else {
      canvas.loadFromJSON(localStorage.getItem('canvas'), canvas.renderAll.bind(canvas));
    }
   var image;
   setTimeout(() => {
    console.log(65, canvas._objects[1])
    image = canvas._objects[1]
   }, 500);
   
    document.getElementById('hue').onclick = function () {
      image.filters.push(new fabric.Image.filters.BlendColor({
        color: 'red', // make it red!  props.colorProduct
        mode: 'overlay',
        alpha: 0.6
      }))
      image.applyFilters();
      canvas.add(image);
      canvas.requestRenderAll();
    };
    let textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
      left: 100,
      top: 50,
      width: 150,
      fontSize: 20,
      fill: '#ff0000'
    });
    
    canvas.add(textbox);
    canvas.moveTo(textbox, 99);
    textbox.moveTo(99);


    document.getElementById('nextstep').onclick = function () {
      canvas.requestRenderAll();
      localStorage.setItem('canvas', JSON.stringify(canvas))
    }
  }

  render() {
    console.log(27, this.props)
    console.log(28, this.props.colorProduct)
    return (
      <div>
        <button id="hue">Change to random color</button>
        <button id='setRender'>Render</button>
        <Link to="/catalog/product/step/3">
          <button id="nextstep">Next step</button>
        </Link>
        <div className='canvas-containers'>
          <canvas id="c" width={650} height={350}></canvas>
        </div>
        <div>{this.props.giveNumber}</div>
      </div>
    );
  };

};

export default CanvasPreview;


