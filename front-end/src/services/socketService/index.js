import {io} from "socket.io-client";
import config from "@config"
import registerSocketHandlers from "./handlers";

const socketClient = io(
    config.socket.URL,
    config.socket.ops
)

registerSocketHandlers(socketClient)

const socketConnection = {
    socket: socketClient,
    connect: socket => {
        socket.connect()
    }
}

export default socketConnection