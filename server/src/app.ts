import express from "express";
import { createServer } from "http";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { Server, Socket } from 'socket.io';
import { TopTenServer } from "./top-ten-server";
import { GameState } from "@common/topten-types"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    // cors: {
    //     origin: "http://localhost:3000/",
    // }
    transports: ["websocket"],
    allowRequest: (req, callback) => {
      callback(null, true);
  }
});

const topTenServer = new TopTenServer();

io.sockets.on("connect", (socket) => {
  console.log("connected");

  socket.on("foo", (arg) => {
    console.log("emit topten");
    socket.emit("topten", {card1: "karte1 von server", card2: "karte2 von server"} as GameState)
  });
  topTenServer.join(socket);
});

app.use(express.static(path.join(__dirname, "/client")));
app.set("view engine", "pug");

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/client/index.html")));

app.get("/api/flubber", (req, res) => {
  console.log("flubber called");
  res.set('Content-Type', 'text/plain').send("jetzt aber..");
});

// app.listen(process.env["PORT"] || 3001, () => console.log("foo on port: " + process.env["PORT"]));
httpServer.listen(process.env["PORT"] || 3001);

console.log(`zwiebelgames.hosting running on port ${process.env["PORT"] || 3001}`);