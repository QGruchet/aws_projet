/**
 * A class who representing a drawing
 */
class Drawing {

    /*
        Default constructor for Drawing
        @param { Any } Canvas : Represent a canvas container
    */
    constructor(canvas) {
        this.dessin = false; // Is the user is drawing rn
        this.prevX = 0;
        this.prevY = 0;
        this.prevColor = null;  // Color of the line
        this.prevOpacity = null;    // Opacity of the line
        this.prevLineWidth = null;  //Width of the line
        this.points=[];


        this.canvas = document.querySelector(canvas);
        this.context = this.canvas.getContext("2d");

        // Set by default all attributes
        this.context.lineWidth = 2.5;
        this.context.strokeStyle = "#000000";
        this.context.globalAlpha = 1;
        this.prevColor = this.context.strokeStyle;
        this.prevOpacity = this.context.globalAlpha;
        this.prevLineWidth = this.context.lineWidth;

        // Allow drawing when user hold left button.
        this.canvas.addEventListener("mousedown", (e) => {
            this.dessin = true;
            this.prevX = (e.clientX - this.canvas.offsetLeft) * this.canvas.width / this.canvas.clientWidth;
            this.prevY = (e.clientY - this.canvas.offsetTop) * this.canvas.height / this.canvas.clientHeight;

            // Save the line point by point
            this.points.push({x:this.prevX, y: this.prevY, size: this.prevLineWidth, color:this.prevColor, mode:"begin"})

        })

        // Disable drawing if users stop holding mouse
        this.canvas.addEventListener("mouseup", () => {
            this.dessin = false;
            this.points.push({x:this.prevX, y: this.prevY, size: this.prevLineWidth, color:this.prevColor, mode:"end"})
        })

        // Disable drawing if the pointer is out of the canvas
        this.canvas.addEventListener("mouseout", () => {
            this.dessin = false
        })

        // Begin line when the user move his mouse.
        this.canvas.addEventListener("mousemove", (e) => {
        if(this.dessin === true) {
            // Set position of the pointer
            let currX = (e.clientX - this.canvas.offsetLeft) * this.canvas.width / this.canvas.clientWidth;
            let currY = (e.clientY - this.canvas.offsetTop) * this.canvas.height / this.canvas.clientHeight;

            // Begin drawing
            this.context.beginPath();
            this.context.moveTo(this.prevX, this.prevY);
            this.context.lineTo(currX, currY)
            this.context.closePath();
            this.context.stroke()
            this.prevX = currX
            this.prevY = currY

            this.points.push({x:this.prevX, y: this.prevY, size: this.prevLineWidth, color:this.prevColor, mode:"draw"})
        }
        })
    }

    /**
     * Function use to clear the entire of the canvas
     */
    erase() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.points = []
    }

    /**
     * Function use to rub the line
     */
    rubber() {
        this.context.strokeStyle = "white"
        this.context.globalAlpha = this.prevOpacity
        this.context.lineWidth = this.prevLineWidth
    }

    /**
     * Function link to the button pencil
     */
    draw() {
        this.context.globalAlpha = this.prevOpacity
        this.context.strokeStyle = this.prevColor
        this.context.lineWidth = this.prevLineWidth
    }

    /**
     * Function use to draw a circle
     * WARNING : NOT WORKING, FULL OF BUGS
     */
    drawCircle() {
        this.canvas.addEventListener('click', (e) => {
            let x = (e.clientX - this.canvas.offsetLeft) * this.canvas.width / this.canvas.clientWidth;
            let y = (e.clientY - this.canvas.offsetTop) * this.canvas.height / this.canvas.clientHeight;
            this.context.beginPath()
            this.context.arc(x, y, 20, 0, 2 * Math.PI)
            this.context.closePath();
            this.context.stroke();
        })
    }

    /**
     * Function use to change color of the line according to the user's choice
     */
    changeColor() {
        const colorPicker = document.querySelector('.color-picker');
        colorPicker.addEventListener('change', (e) => {
            this.context.strokeStyle = e.target.value;
            this.prevColor = e.target.value;
        })
    }

    /**
     * Function use to change width of the line according to the user's choice
     */
    changeLineWidth() {
        const range = document.querySelector('.lineWidth');
        const label = document.querySelector(".rangeVal");

        range.addEventListener('input', e => {
            const width = e.target.value;
            console.log(width)
            label.innerHTML = width;
            this.context.lineWidth = width / 10;
            this.prevLineWidth = e.target.value / 10;
        })
    }

    /**
     * Function use to change opacity of the line according to the user's choice
     */
    changeOpacity() {
        const range = document.querySelector('.opacity');
        const label = document.querySelector(".opacityVal");

        range.addEventListener('input', e => {
            const opacity = e.target.value;
            label.innerHTML = opacity;
            this.context.globalAlpha = opacity / 100;
            this.prevOpacity = e.target.value / 100;
        })
    }

    /**
     * Function use to fill the canvas by the user's choice of color
     */
    fill() {
        this.context.beginPath()
        this.context.rect(0, 0, this.canvas.width, this.canvas.height)
        this.context.fillStyle = this.context.strokeStyle
        this.context.fill()
    }

    /**
     * Function use to undo the line point by point
     */
    undoLast(){
        this.points.pop();
        this.redrawAll();
    }

    /**
     * Function use to redraw all the canvas except the point that we just undo
     */
    redrawAll(){
        if(this.points.length === 0){
            return;
        }
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        for(let i = 0; i < this.points.length; i++) {
            const pt = this.points[i];
            let begin = false;
            if(this.context.lineWidth !== pt.size) {
                this.context.lineWidth = pt.size;
                begin=true;
            }
            if(this.context.strokeStyle !== pt.color) {
                this.context.strokeStyle = pt.color;
                this.prevColor = pt.color;
                begin=true;
            }
            if(pt.mode === "begin" || begin){
                this.context.beginPath();
                this.context.moveTo(pt.x,pt.y);
            }
            this.context.lineTo(pt.x, pt.y);
            if(pt.mode === "end" || (i === this.points.length-1)) {
                this.context.stroke();
            }
        }
        this.context.stroke();
    }
}

/**
 * Loading function when the window is load. All are waiting a user interaction with buttons.
 */
window.onload = () => {

    let canvas = new Drawing('#DrawingArea')

    canvas.draw()

    // User click on "clear" button
    document.querySelector("#reset").addEventListener("click", () => {
        canvas.erase()
    })

    // User click on "save" button
    document.getElementById('download').addEventListener("click", () => {
        const link = document.createElement('a');
        link.download = 'filename.png';
        link.href = document.getElementById('DrawingArea').toDataURL()
        document.getElementById('DrawingArea').appendChild(link)
        link.click();
    })

    // User click on "Rubber" button
    document.getElementById("rubber").addEventListener("click", () => {
        canvas.rubber()
    })

    // User click on "pencil" button
    document.getElementById("pencil").addEventListener("click", () => {
        canvas.draw()
    })

    // User click on color picker button
    document.getElementById("colorPicker").addEventListener("click", () => {
        canvas.changeColor()
    })

    // User click on "Line width" button
    document.getElementById("rangeLineWidth").addEventListener("click", () => {
        canvas.changeLineWidth()
    })

    // User click on "Opacity" button
    document.getElementById("rangeOpacity").addEventListener("click", () => {
        canvas.changeOpacity()
    })

    // User click on "fill" button
    document.getElementById("fillCanva").addEventListener("click", () => {
        canvas.fill()
    })

    // User click on "undo" button
    document.getElementById("undo").addEventListener("click", () => {
        canvas.undoLast()
    })

}