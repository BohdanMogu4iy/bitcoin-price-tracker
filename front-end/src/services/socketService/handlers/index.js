import config from "@config"
import connectedHandler from "@services/socketService/handlers/connectedHandler";

const registerSocketHandlers = socket => {
    socket.onAny((event, ...args) => {
        console.log(event);
    });

    socket.on(config.socket.events.CONNECTED, connectedHandler)
}

export default registerSocketHandlers