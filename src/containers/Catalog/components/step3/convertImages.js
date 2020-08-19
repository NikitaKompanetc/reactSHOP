function convertImage() {
    //let colorProduct = localStorage.getItem('imageColor');
    var canvas = document.getElementById('c');
    var theImage = canvas.toDataURL('image/png');
    console.log(5, theImage)
}
export default convertImage;