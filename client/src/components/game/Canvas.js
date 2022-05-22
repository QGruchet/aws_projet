import React, {useRef, useEffect, useState, useCallback} from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../styles/game-canvas.scss'

const colors = [
  "black",
  "blue",
  "brown",
  "green",
  "grey",
  "orange",
  "pink",
  "purple",
  "red",
  "white",
  "yellow"
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
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedFontSize, setSelectedFontSize] = useState(fontSizes[4])
  const [selectedLineJoin, setSelectedLineJoin] = useState(lineJoins[0])
  const [mouseDown, setMouseDown] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (canvasRef.current)
      ctx.current = canvasRef.current.getContext('2d');
  }, [])

  const draw = useCallback((x, y) => {
        ctx.current.beginPath();
        ctx.current.strokeStyle = selectedColor;
        ctx.current.lineWidth = selectedFontSize;
        ctx.current.lineJoin = selectedLineJoin;
        ctx.current.moveTo(position.x, position.y);
        ctx.current.lineTo(x, y);
        ctx.current.closePath();
        ctx.current.stroke();
        setPosition({ x, y });
  }, [position, mouseDown, selectedColor, selectedFontSize, selectedLineJoin, setPosition])

  const getMousePos = (e) => {
    const c = ctx.current.canvas;
    const rect = c.getBoundingClientRect(),
      scaleX = c.width / rect.width,
      scaleY = c.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    }
  }

  const onMouseDown = (e) => {
    setPosition(getMousePos(e));
    setMouseDown(true);
  }

  const onMouseUp = (e) => {
    setMouseDown(false);
  }

  const onMouseLeave = (e) => {
    setMouseDown(false);
  }

  const onMouseMove = (e) => {
    if (!mouseDown)
      return ;
    const pos = getMousePos(e);
    draw(pos.x, pos.y);
  }

  const fill = () => {
    ctx.current.beginPath();
    ctx.current.rect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
    ctx.current.fillStyle = selectedColor;
    ctx.current.fill();
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

  return(
    <Col className='p-0' align='center'>
      <canvas className='canvas'
        width='1200px'
        height='800px'
        ref={canvasRef}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
      />
      <Row align='center'>
        <div className='canvas-options'>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {
              colors.map(color => <option key={color} value={color}>{color}</option>)
            }
          </select>
          <select
            value={selectedFontSize}
            onChange={(e) => setSelectedFontSize(e.target.value)}
          >
            {
              fontSizes.map(fontSize => <option key={fontSize} value={fontSize}>{fontSize}</option>)
            }
          </select>

          <select
            value={selectedLineJoin}
            onChange={(e) => setSelectedLineJoin(e.target.value)}
          >
          {
            lineJoins.map(lineJoin => <option key={lineJoin} value={lineJoin}>{lineJoin}</option>)
          }
          </select>
          <button onClick={fill}>Fill</button>
          <button onClick={download}>Download</button>
        </div>
      </Row>
    </Col>
  )
}

export default Canvas;
