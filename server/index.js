const io = require("socket.io")(4500, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    console.log(data);
  });
});
