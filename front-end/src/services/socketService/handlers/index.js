const registerSocketHandlers = socket => {
    socket.onAny((event, ...args) => {
        console.log(event);
    });
}

export default registerSocketHandlers