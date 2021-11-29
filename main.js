Canvas=document.getElementById("myCanvas")
ctx=Canvas.getContext("2d")
var roverwidth=76
var roverheight=76
rover_x=10
rover_y=10
backgroundimg="mars.jpg"
roverimg="rover.png"
function add(){
var backgroundimgtag=new Image()
backgroundimgtag.onload=uploadbackground
backgroundimgtag.src=backgroundimg
var roverimgtag=new Image()
roverimgtag.onload=uploadrover
roverimgtag.src=roverimg
}
function uploadrover(){
ctx.drawImage(roverimgtag,rover_x,rover_y,roverwidth,roverheight)
}
function uploadbackground(){
    ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height)
    }  
