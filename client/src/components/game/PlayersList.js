import { useEffect, useState } from 'react';
import { Badge, Col, Container, ListGroup } from 'react-bootstrap';
import '../../styles/players-list.scss';

function PlayersList({ socket }) {
  const [players, setPlayers] = useState([
    { id: 1, username: 'Player 1', score: 0 },
    { id: 2, username: 'Player 2', score: 0 },
    { id: 3, username: 'Player 3', score: 0 },
  ]);

  useEffect(() => {
    socket.on('join', addPlayer);
    socket.on('leave', removePlayer);

    return () => {
      socket.off('join', addPlayer);
      socket.off('leave', removePlayer);
    };
  }, [socket, players]);

  const addPlayer = (data) => {
    setPlayers([...messages, { id: data.id, username: data.username, score: 0 }]);
  }

  const removePlayer = (data) => {
    setPlayers(players.filter(player => player.id !== data.id));
  }

  const renderPlayer = (p, i) => {
    return (
      <ListGroup.Item key={i} className='d-flex justify-content-between align-items-start' variant='light'>
        <div className='ms-2 me-auto fw-bold'>
          {p.username}
        </div>
        <Badge bg='warning' pill>
          {p.score}
        </Badge>
      </ListGroup.Item>
    );
  }

  const renderAllPlayers = () => {
    return players.map((m, i) => { return renderPlayer(m, i); });
  }

  return (
    <Col className='flex-column players-list'>
      <h1 className='text-center players-list-title p-2'>Joueurs</h1>
      <ListGroup className='ms-5 me-5'>
        {renderAllPlayers()}
      </ListGroup>
    </Col>
  );
}

export default PlayersList;
