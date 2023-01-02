// Animated Gradient
// SETUP
let x = canvas.width / 2
y = 0   //starting y position of motion objects / global
dx = 2
dy = 2
rightWallHit = false
leftWallHit = false
topWallHit = false
bottomWallHit = false
animationSpeed = .1
mousePressed = false
touchPressed = false
clickLimit = 50

// create background object
const backgroundGradient = new gradientBackground(10, -11, 666, 0,'#0036c4','#071f5f')

// create gradient square object 
const newSquare = new gradientSquare(10, 10, 666, 0, '#0036c4', '#00FF00')

// create gradient circle objects
const myGradientCircle = new gradientCircle(10, 10, 666, 0, '#FF0000', '#0036c4', undefined, 300, false)
const whiteBorderCircle = new gradientCircle(10, 10, 666, 0, undefined, undefined, undefined, 900, true)
const tealCircle = new gradientCircle(10, 10, 666, 0, '#FFF', '#00FFFF', undefined, 600, false)

// Event handler functions
// when mouse as pressed or screen is touched
addEventListener('mousedown', (event) => {
    // console.info('mouse pressed', event)
    mousePressed = true
})
addEventListener('mouseup', (event) => {
    // console.info('mouse released', event)
    mousePressed = false
})
addEventListener('touchstart', (event) => {
    // console.info('touch pressed', event)
    touchPressed = true
})
addEventListener('touchend', (event) => {
    // console.info('touch released', event)
    touchPressed = false
})
// addEventListener('touchmove', (event) => {
//     // console.info('touch moved', event)
//     touchMove = true
// })

// draw loop
function draw() {
    const canvas = document.getElementById('canvas').getContext('2d')
    
    // show all objects on canvas
    backgroundGradient.show(canvas)
    newSquare.show(canvas)
    whiteBorderCircle.show(canvas)
    myGradientCircle.show(canvas)

  
    if(!mousePressed && !touchPressed){
        tealCircle.show(canvas)
    }else{
        tealCircle.show(canvas, true, '#FFFF00', '#FF00FF')
        //--clickLimit
    }
    // console.info('clickLimit:: ' +  clickLimit)

    // listens for border collisions to keep objects inside canvas
    borderWaiter(canvas)
    
    // if(clickLimit <= 0){
    //     console.info('click limit reached')
    //     clickLimit = 0

    // }
    // When clicked, show four circle impressions in the square
    // when the circle in the correct color is placed on the impressions, they

    // flash toggle the teal circle after 9999 ms
    setTimeout(function(){  
        tealCircle.show(canvas, true, '#FFFF00', '#FF00FF')
        // console.info('TIMEOUT! ')
    }, 9999);

}
let myInterval = setInterval(draw, animationSpeed);


// function to stop the animation
function gameOver(canvas){
    // console.log('GAME OVER')
    // Fill RED WITH WHITE GAMEOVER TEXT
    // canvas.fillStyle = 
    //canvas.fillRect(10, 10, 1600, 1600)
    //canvas.fillStyle = "blue";
    //canvas.fill()


    // stopAnimation()
    // startAnimation()
    //
}
function borderWaiter(canvas){
    // INCRE/DECRE TARGET X POSITION
    // check shape location and toggle direction
    // initial x+ push
    if (x > 130 && x < 875 && !rightWallHit && !leftWallHit) {
        x += dx
    }   // go left if right wall was hit
    else if (rightWallHit && !leftWallHit) {
        x -= dx
        leftWallHit = false
        //gameOver(canvas)  
        // go right if left wall was hit
    } else if (leftWallHit && !rightWallHit) {
        x += dx
        rightWallHit = false
        
    }

    // initial y+ push
    if (y >= 0 && y < 1400 && !topWallHit && !bottomWallHit) {
        y += dy
    }   // go down if bottom wall was hit
    else if (topWallHit && !bottomWallHit) {
        y += dy
        bottomWallHit = false
        // go down if top wall was hit
    } else if (bottomWallHit && !topWallHit) {
        y -= dy
        topWallHit = false
    }

    // event handlers
    // x axis
    // right border
    if (x > 875) {
        rightWallHit = true
        leftWallHit = false
    }
    // left border
    else if (x <= 130) {
        rightWallHit = false
        leftWallHit = true
    }
    // y axisx
    //top border
    if (y < 0) {
        y += dy
        topWallHit = true
        bottomWallHit = false
    }
    // bottom border
    if (y >= 1400) {
        y -= dy
        topWallHit = false
        bottomWallHit = true
    }
}


function stopAnimation() {
    if (myInterval) {
        clearInterval(myInterval)
        return 'animation stopped!'
    }
    return 'animation NOT stopped!'
}

function startAnimation() {
    try {
        myInterval = setInterval(draw, animationSpeed)
        return 'animation started!'
    } catch (e) {
        console.error('error: animation Not started! ' + e)
        return 'animation NOT started!'
    }
    finally {
    }
}