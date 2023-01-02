class gradientShape {
    constructor(xGradient, yGradient, wGradient, hGradient, leftColor, rightColor, initX, initY, stokeBool) {
        //super(x, x)
        this.x = xGradient
        this.y = yGradient
        this.w = wGradient
        this.h = hGradient
        this.initX = initX
        this.initY = initY
        this.leftColor = leftColor
        this.rightColor = rightColor
        this.rightWallHit = false
        this.leftWallHit = false
        this.topWallHit = false
        this.bottomWallHit = false
        this.stroke = stokeBool
    }
    createLinearGradientLeftRight(x, y, w, h, leftColor, rightColor, canvas) {
        let gradientSquarefillStyle
        if (leftColor && rightColor) {
            gradientSquarefillStyle = canvas.createLinearGradient(x, y, w, h)
            gradientSquarefillStyle.addColorStop(0, leftColor)
            gradientSquarefillStyle.addColorStop(1, rightColor)
            return gradientSquarefillStyle
        }
    }
    // middleware methods
    getGradient(canvas) {
        return this.createLinearGradientLeftRight(this.x, this.y, this.w, this.h, this.leftColor, this.rightColor, canvas)
    }
    changeGradient(newLeftColor, newRightColor, canvas) {
        return this.createLinearGradientLeftRight(this.x, this.y, this.w, this.h, newLeftColor, newRightColor, canvas)
    }
}
// CIRCLE CLASS
class gradientCircle extends gradientShape {
    // constructor(x,y,w,h,leftColor,rightColor){
    //     super(x, x)
    // }
    show(canvas, changeGradient, newLeftColor, newRightColor) {
        if (changeGradient === undefined) {
            canvas.fillStyle = this.getGradient(canvas)
        } else {
            canvas.fillStyle = this.changeGradient(newLeftColor, newRightColor, canvas)
        }

        canvas.strokeStyle = "#FFF"
        // create shape
        canvas.beginPath();
        // canvas.arc(x, this.initY, 120, 0, 2 * Math.PI);
        canvas.arc(x, this.initY, 120, 0, 2 * Math.PI);
        if (this.stroke) {
            canvas.stroke()
        } else {
            canvas.fill()
        }
        return 'complete'
    }
}
// SQUARE CLASS
class gradientSquare extends gradientShape {
    // constructor(x,y,w,h,leftColor,rightColor){
    //     super(x, x)
    // }
    show(canvas) {
        // create and assign gradient fill
        canvas.fillStyle = this.getGradient(canvas)
        // create shape
        canvas.beginPath()
        canvas.rect(20, 40, 600, 600)
        canvas.fill()
        canvas.closePath()
        return 'complete'
    }
}
//BACKGROUND CLASS
class gradientBackground extends gradientShape {
    // constructor(x,y,w,h,leftColor,rightColor){
    //     super(x, x)
    // }
    show(canvas) {
        // BACKGROUND COLOR RECT
        canvas.fillStyle = this.getGradient(canvas)
        canvas.fillRect(10, 10, 1600, 1600);
    }
}
// LINE CLASS
// class gradientLine extends gradientShape{}
