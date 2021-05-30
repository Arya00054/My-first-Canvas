var canvasWidth = 650
var canvasHeight = 350

var spriteWidth = 864
var spriteheight = 280

var rows = 2
var column = 8

var trackRight = 0
var trackleft = 1

var width = spriteWidth/column
var height = spriteheight/rows

var curFrame = 0
var framecount = 8

var x = 0
var y = 0

var srcX = 0
var srcY = 0

var left = false
var right = true

var speed = 12

var canvas = document.getElementById("canvas")

canvas.Width = canvasWidth
canvas.Height = canvasHeight

var ctx = canvas.getContext("2d")

var character = new Image()
character.src = "character.png"

function updateFrame(){
 curFrame = ++curFrame % framecount 
 srcx = curFrame * width
 ctx.clearRect(x,y,width,height)
 if (left && x>0){
     srcY = trackleft * height
     x-=speed
 }
 if(right && x<(canvasWidth-width)){
     srcY = trackRight * height
     x+=speed
 }
}

function draw(){
    updateFrame()
    ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height)
}

setInterval(draw,100)

function moveLeft(){
    left = true
    right = false
}

function moveRight(){
    left = false
    right = true
}