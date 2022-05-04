import socketio from "socket.io-client";

export const socket = socketio.connect(`http://localhost:${process.env.API_PORT}`);
export const SocketContext = React.createContext();
