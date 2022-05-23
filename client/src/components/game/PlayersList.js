import { useEffect, useState } from 'react';
import { Badge, Col, ListGroup } from 'react-bootstrap';
import '../../styles/players-list.scss';

function PlayersList({ socket }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.on('update-players', updatePlayers);

    return () => {
      socket.off('update-players', updatePlayers);
    };
  }, [socket, players]);

  const updatePlayers = (data) => {
    data.sort((a, b) => {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0;
    });
    setPlayers(data);
  }

  const renderPlayer = (p, i) => {
    return (
      <ListGroup.Item key={i} className='p-1 d-flex justify-content-between align-items-start' variant='light'>
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
    return players.map((p, i) => { return renderPlayer(p, i); });
  }

  return (
    <Col className='p-0 players-list'>
      <h1 className='text-center players-list-title p-2'>Joueurs</h1>
      <ListGroup className='ms-2 me-2'>
        {renderAllPlayers()}
      </ListGroup>
    </Col>
  );
}

export default PlayersList;
