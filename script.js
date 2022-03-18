class Drawing {
    constructor(canvas) {
        this.dessin = false;
        this.prevX = 0;
        this.prevY = 0;

        this.canvas = document.querySelector(canvas);
        this.context = this.canvas.getContext("2d");

        // Draw in the canvas

        this.context.lineWidth = 1;
        this.context.strokeStyle = "red";
        this.context.globalAlpha = 0.5;

        this.canvas.addEventListener("mousedown", (e) => {
            this.dessin = true;
            this.prevX = (e.clientX - this.canvas.offsetLeft) * this.canvas.width / this.canvas.clientWidth;
            this.prevY = (e.clientY - this.canvas.offsetTop) * this.canvas.height / this.canvas.clientHeight;


        })

        this.canvas.addEventListener("mouseup", (e) => {
            this.dessin = false;
        })

        this.canvas.addEventListener("mouseout", (e) => {
            this.dessin = false;
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
            }
        })
    }

    erase() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    increaseLineWidth() {
        this.context.lineWidth += 0.5
    }

    decreaseLineWidth() {
        this.context.lineWidth -= 0.5
    }

    increaseOpacity() {
        this.context.globalAlpha += 0.1
    }

    decreaseOpacity() {
        this.context.globalAlpha -= 0.1
    }

    undo() {

    }
}

window.onload = () => {

    let canvas = new Drawing('#DrawingArea')

    document.querySelector("#reset").addEventListener("click", () => {
        canvas.erase()
    })

    document.getElementById('download').addEventListener("click", () => {
        const link = document.createElement('a');
        link.download = 'filename.png';
        link.href = document.getElementById('DrawingArea').toDataURL()
        document.getElementById('DrawingArea').appendChild(link)
        link.click();
    })

    document.getElementById("increaseLineWidth").addEventListener("click", () => {
        canvas.increaseLineWidth()
    })

    document.getElementById("decreaseLineWidth").addEventListener("click", () => {
        canvas.decreaseLineWidth()
    })

    document.getElementById("increaseOpacity").addEventListener("click", () => {
        canvas.increaseOpacity()
    })

    document.getElementById("decreaseOpacity").addEventListener("click", () => {
        canvas.decreaseOpacity()
    })


}
