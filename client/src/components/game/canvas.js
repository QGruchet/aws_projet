import React, {useRef, useEffect, useState, useCallback} from 'react';

const colors = [
  "red",
  "yellow",
  "blue",
  "black",
  "green",
  "brown",
  "purple",
  "grey",
  "orange",
  "pink"
]

const fontSizes = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20
]

const lineJoins = [
  "round", "bevel", "miter"
]

function Canvas() {
  const canvasRef = useRef(null);
  const ctx = useRef(null)
  const [selectedColor, setSelectedColor] = useState(colors[3])
  const [selectedFontSize, setSelectedFontSize] = useState(fontSizes[4])
  const [selectedLineJoin, setSelectedLineJoin] = useState(lineJoins[0])
  const [mouseDown, setMouseDown] = useState(false)
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, [])

  const draw = useCallback((x, y) => {
      if (mouseDown) {
        ctx.current.beginPath();
        ctx.current.strokeStyle = selectedColor;
        ctx.current.lineWidth = selectedFontSize;
        ctx.current.lineJoin = selectedLineJoin;
        ctx.current.moveTo(lastPosition.x, lastPosition.y);
        ctx.current.lineTo(x, y);
        ctx.current.closePath();
        ctx.current.stroke();

        setPosition({
          x, y
        })
      }
  }, [lastPosition, mouseDown, selectedColor, selectedFontSize, selectedLineJoin, setPosition])

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX - 390,
      y: e.pageY - 140
    })
    setMouseDown(true)
  }

  const onMouseUp = (e) => {
    setMouseDown(false)
  }

  const onMouseLeave = (e) => {
    setMouseDown(false)
  }

  const onMouseMove = (e, isDrawing) => {
    draw(e.pageX - 390, e.pageY - 140)
  }

  const clear = () => {
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
  }

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png')
    const blob = await(await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob)
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  }

  console.log(mouseDown, lastPosition)
  return(
    <div className={"Canvas"}>
      <canvas
        style={{
          border: "1px solid #000",
        }}
        width={1100}
        height={700}
        ref={canvasRef}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
      />
      <br />
      <div className={"options"}>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          {
            colors.map(
              color => <option key={color} value={color}>{color}</option>
            )
          }
        </select>

        <select
          value={selectedFontSize}
          onChange={(e) => setSelectedFontSize(e.target.value)}
        >
          {
            fontSizes.map(
              fontSize => <option key={fontSize} value={fontSize}>{fontSize}</option>
            )
          }
        </select>

        <select
          value={selectedLineJoin}
          onChange={(e) => setSelectedLineJoin(e.target.value)}
        >
          {
            lineJoins.map(
              lineJoin => <option key={lineJoin} value={lineJoin}>{lineJoin}</option>
            )
          }
        </select>
        <button onClick={clear}>Clear</button>
        <button onClick={download}>Download</button>
      </div>
    </div>
  )
}

export default Canvas;
