class Drawing {
    constructor(canvas) {
        this.dessin = false;
        this.prevX = 0;
        this.prevY = 0;
        this.prevColor = null;
        this.prevOpacity = null;
        this.prevLineWidth = null;
        this.points=[];


        this.canvas = document.querySelector(canvas);
        this.context = this.canvas.getContext("2d");

        // Draw in the canvas

        this.context.lineWidth = 2.5;
        this.context.strokeStyle = "#000000";
        this.context.globalAlpha = 1;
        this.prevColor = this.context.strokeStyle;
        this.prevOpacity = this.context.globalAlpha;
        this.prevLineWidth = this.context.lineWidth;

        this.canvas.addEventListener("mousedown", (e) => {
            this.dessin = true;
            this.prevX = (e.clientX - this.canvas.offsetLeft) * this.canvas.width / this.canvas.clientWidth;
            this.prevY = (e.clientY - this.canvas.offsetTop) * this.canvas.height / this.canvas.clientHeight;

            this.points.push({x:this.prevX, y: this.prevY, size: this.prevLineWidth, color:this.prevColor, mode:"begin"})

        })

        this.canvas.addEventListener("mouseup", () => {
            this.dessin = false;
            this.points.push({x:this.prevX, y: this.prevY, size: this.prevLineWidth, color:this.prevColor, mode:"end"})
        })

        this.canvas.addEventListener("mouseout", () => {
            this.dessin = false
        })

            this.canvas.addEventListener("mousemove", (e) => {
            if(this.dessin === true) {
                let currX = (e.clientX - this.canvas.offsetLeft) * this.canvas.width / this.canvas.clientWidth;
                let currY = (e.clientY - this.canvas.offsetTop) * this.canvas.height / this.canvas.clientHeight;
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

    erase() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.points = []
    }

    rubber() {
        this.context.strokeStyle = "white"
        this.context.globalAlpha = this.prevOpacity
        this.context.lineWidth = this.prevLineWidth
    }

    draw() {
        this.context.globalAlpha = this.prevOpacity
        this.context.strokeStyle = this.prevColor
        this.context.lineWidth = this.prevLineWidth
    }

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

    changeColor() {
        const colorPicker = document.querySelector('.color-picker');
        colorPicker.addEventListener('change', (e) => {
            this.context.strokeStyle = e.target.value;
            this.prevColor = e.target.value;
        })
    }

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

    fill() {
        this.context.beginPath()
        this.context.rect(0, 0, this.canvas.width, this.canvas.height)
        this.context.fillStyle = this.context.strokeStyle
        this.context.fill()
    }

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

    undoLast(){
        this.points.pop();
        this.redrawAll();
    }
}

window.onload = () => {

    let canvas = new Drawing('#DrawingArea')

    canvas.draw()

    // Pour vider le canvas
    document.querySelector("#reset").addEventListener("click", () => {
        canvas.erase()
    })

    // Pour utiliser le bouton de sauvegarde
    document.getElementById('download').addEventListener("click", () => {
        const link = document.createElement('a');
        link.download = 'filename.png';
        link.href = document.getElementById('DrawingArea').toDataURL()
        document.getElementById('DrawingArea').appendChild(link)
        link.click();
    })

    // Pour utiliser la gomme
    document.getElementById("rubber").addEventListener("click", () => {
        canvas.rubber()
    })

    // Pour utiliser le pinceau
    document.getElementById("pencil").addEventListener("click", () => {
        canvas.draw()
    })

    // Pour changer la couleur
    document.getElementById("colorPicker").addEventListener("click", () => {
        canvas.changeColor()
    })

    // Pour changer la largeur du trait
    document.getElementById("rangeLineWidth").addEventListener("click", () => {
        canvas.changeLineWidth()
    })

    // Pour changer la transparence du trait
    document.getElementById("rangeOpacity").addEventListener("click", () => {
        canvas.changeOpacity()
    })

    document.getElementById("fillCanva").addEventListener("click", () => {
        canvas.fill()
    })

    document.getElementById("undo").addEventListener("click", () => {
        canvas.undoLast()
    })

}