import io from "socket.io-client";

export const socket = io.connect(`http://localhost:${process.env.API_PORT}`);
export const SocketContext = React.createContext();
