import React, { Component, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import '../../../scss/component/canvas.scss';
import tShirt from '../../../img/Womens-T-Shirt-Example.png';


const CanvasPreview = (props) => {
  console.log(17, props.colorProduct)


useEffect( () => {

  var canvas = new fabric.Canvas('c');
        var image;
        var imgEl = document.createElement('img');
        imgEl.crossOrigin = 'anonymous';
        imgEl.onload = function() {
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

          var textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
            left: 100,
            top: 50,
            width: 150,
            fontSize: 20,
            fill: '#ff0000'
          });
            canvas.add(textbox);
            canvas.requestRenderAll();
        }
        //imgEl.src = 'https://i.imgur.com/28kU1bo.png';
        //imgEl.src = 'https://i.imgur.com/4VGs2y9.png';
        imgEl.src = tShirt;
        
        // document.getElementById('hue').onclick = function() {
          image.filters.push(new fabric.Image.filters.BlendColor({
                color: props.colorProduct, // make it red!  props.colorProduct
                mode: 'overlay',
                alpha: 0.6 
              }))
          image.applyFilters();
          canvas.add(image);
          canvas.requestRenderAll();
        // };

        // test = () => {
        //   canvas.requestRenderAll();
        //   var dataURL = canvas.toDataURL({format: 'jpeg',})
        //     console.log(dataURL)
        // }
      
      canvas.requestRenderAll();
})



// var canvas = new fabric.Canvas('c');
// var image;
//     var imgEl = document.createElement('img');
//     imgEl.crossOrigin = 'anonymous';
//     imgEl.onload = function() {
//       image = new fabric.Image(imgEl);
//       var text = new fabric.Textbox("01", {
//             top: 100,
//             left: 100
//         });
//       image.set({  
//             left: 150,
//             top: 50,
//             }).scale(1);
//       image.hasControls = false;
//       image.hasBorders = false;
//       image.lockMovementX = true;
//       image.lockMovementY = true;
//       image.lockRotation = true;
//       image.scaleToHeight(300);
//       image.scaleToWidth(300);
//       canvas.add(image)
//       console.log(92, canvas.item(0))
//       canvas.add(text);
//       console.log(94, canvas.item(0))
//       text.set("fill", '#C0001A')

//     }
//     // imgEl.src = 'https://i.imgur.com/28kU1bo.png';
//     imgEl.src = 'https://i.imgur.com/4VGs2y9.png';
//     //imgEl.src = tShirt;
//     function zoomin() {
//         canvas.requestRenderAll();
//     var dataURL = canvas.toDataURL({format: 'jpeg',})
//       console.log(dataURL)
//       console.log(13)
//       console.log(107, canvas.item(0))
//     }
    // document.addEventListener("click", function(){
    //   document.getElementById("c")
    //   console.log(110 )
    //   ;
    // });
    // let elem = document.getElementById("hue");
    // console.log(111, elem)
    // elem.addEventListener("mouseup", function(){
    //   console.log(115)
    // })


return (
        <div>
          <button id="hue">Change to random color</button>
          {/* <button onClick={() => zoomin()}>click</button> */}
          <div className='canvas-containers'>
            <canvas id="c"  width={650} height={350}></canvas>
          </div>
        </div>
  )

}

export default CanvasPreview;


