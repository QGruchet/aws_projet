import React, {useRef, useEffect, useState, useCallback} from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../styles/game-canvas.scss'

const fontSizes = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20
]

const lineJoins = [
  'round', 'bevel', 'miter'
]

function Canvas({ socket }) {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [canDraw, setCanDraw] = useState(false);
  const [color, setColor] = useState('black');
  const [fontSize, setFontSize] = useState(fontSizes[4]);
  const [lineJoin, setLineJoin] = useState(lineJoins[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (canvasRef.current)
      ctx.current = canvasRef.current.getContext('2d');

    socket.on('draw', draw);
    socket.on('fill', fill);
    socket.on('update-can-draw', updateCanDraw);

    return () => {
      socket.off('draw', draw);
      socket.off('fill', fill);
      socket.off('update-can-draw', updateCanDraw);
    }
  }, [socket]);

  const draw = (data) => {
    const { x, y, x1, y1, color, fontSize, lineJoin } = data;
    ctx.current.beginPath();
    ctx.current.strokeStyle = color;
    ctx.current.lineWidth = fontSize;
    ctx.current.lineJoin = lineJoin;
    ctx.current.moveTo(x, y);
    ctx.current.lineTo(x1, y1);
    ctx.current.closePath();
    ctx.current.stroke();
  };

  const fill = (data) => {
    ctx.current.beginPath();
    ctx.current.rect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
    ctx.current.fillStyle = data.color;
    ctx.current.fill();
  }

  const updateCanDraw = (data) => {
    setCanDraw(data.canDraw);
  }

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
    if (canDraw)
      socket.emit('draw', {
        color, fontSize, lineJoin,
        x: position.x, y: position.y,
        x1: pos.x, y1: pos.y
      });
    setPosition({ x: pos.x, y: pos.y });
  }

  const onFill = () => {
    if (canDraw)
      socket.emit('fill', { color });
  }

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png')
    const blob = await(await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob)
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = 'image.png';
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
          <input type='color' value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            {
              fontSizes.map(fontSize => <option key={fontSize} value={fontSize}>{fontSize}</option>)
            }
          </select>

          <select
            value={lineJoin}
            onChange={(e) => setLineJoin(e.target.value)}
          >
          {
            lineJoins.map(lineJoin => <option key={lineJoin} value={lineJoin}>{lineJoin}</option>)
          }
          </select>
          <button onClick={onFill}>Remplir</button>
          <button onClick={download}>Télécharger</button>
        </div>
      </Row>
    </Col>
  )
}

export default Canvas;
