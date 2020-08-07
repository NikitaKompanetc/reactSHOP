// include('./fabric.js/dist/fabric.js');

// let canvas = new fabric.Canvas('tshirt-canvas');

// make_base();

//     function make_base() {
//         base_image = new Image();
//         base_image.src = './img/background_tshirt.png';
//         context.drawImage(base_image, 100, 100);
//     }

// //add text on t-shirt
// var t1 = new fabric.Textbox('123123123123', {
//         width: 150,
//         top: 5,
//         left: 5,
//         fontSize: 16,
//         textAlign: 'center',
//         fixedWidth: 150
//     });

//     canvas.on('text:changed', function(opt) {
//     var t1 = opt.target;
//     if (t1.width > t1.fixedWidth) {
//         t1.fontSize *= t1.fixedWidth / (t1.width + 1);
//         t1.width = t1.fixedWidth;
//     }
//     });

//     canvas.add(t1);


// function updateTshirtImage(imageURL){
//     fabric.Image.fromURL(imageURL, function(img) {                   
//         img.scaleToHeight(300);
//         img.scaleToWidth(300); 
//         canvas.centerObject(img);
//         canvas.add(img);
//         canvas.renderAll();
//     });
// }

// // Update the TShirt color according to the selected color by the user
// document.getElementById("tshirt-color").addEventListener("change", function(){
//     document.getElementById("tshirt-div").style.backgroundColor = this.value;
// }, false);

// // Update the TShirt color according to the selected color by the user
// document.getElementById("tshirt-design").addEventListener("change", function(){

//     // Call the updateTshirtImage method providing as first argument the URL
//     // of the image provided by the select
//     updateTshirtImage(this.value);
// }, false);

// // When the user clicks on upload a custom picture
// document.getElementById('tshirt-custompicture').addEventListener("change", function(e){
//     var reader = new FileReader();
    
//     reader.onload = function (event){
//         var imgObj = new Image();
//         imgObj.src = event.target.result;

//         // When the picture loads, create the image in Fabric.js
//         imgObj.onload = function () {
//             var img = new fabric.Image(imgObj);

//             img.scaleToHeight(300);
//             img.scaleToWidth(300); 
//             canvas.centerObject(img);
//             canvas.add(img);
//             canvas.renderAll();
//         };
//     };

//     // If the user selected a picture, load it
//     if(e.target.files[0]){
//         reader.readAsDataURL(e.target.files[0]);
//     }
// }, false);

// // When the user selects a picture that has been added and press the DEL key
// // The object will be removed !
// document.addEventListener("keydown", function(e) {
//     var keyCode = e.keyCode;

//     if(keyCode == 46){
//         console.log("Removing selected element on Fabric.js on DELETE key !");
//         canvas.remove(canvas.getActiveObject());
//     }
// }, false);

// //save canvas + bg image
// var canvasData = document.getElementById('tshirt-canvas');
// var dataURL = canvasData.toDataURL();

// var newImage = document.createElement('img');
// newImage.dataURL = dataURL;
// newImage.width = newImage.height = "600";
// document.querySelector('#imageContainer').innerHTML = newImage.outerHTML;