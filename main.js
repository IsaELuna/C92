var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.from.URL('AniversárioImagem.png', function(img){
    blockImageObject = Img;
    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
    top:0,
    left:0
    });
    canvas.add(blockImageObject);
    });
}

function playSound()
{
    x.play();
}