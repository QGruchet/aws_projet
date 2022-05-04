import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Navigation from "../components/Navigation";
const ENDPOINT = 'http://localhost:3000';

function ShowDate() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT + '/date');
    socket.on('FromAPI', data => {
      setResponse(data);
    });
  }, []);

  return (
    <div>
      <Navigation />
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    </div>
  );
}

export default ShowDate;
