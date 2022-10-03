import express from "express";
import { createServer } from "http";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { Server } from 'socket.io';
import { TopTenServer } from "./top-ten-server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:4200/",
    methods: ["GET", "POST"]
  },
  transports: ["websocket"],
  // allowRequest: (req, callback) => {
  //   callback(null, true);
  // }
});

const topTenServer = new TopTenServer(io);

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("join", (name: string) => topTenServer.join(name, socket));
});

app.use(express.static(path.join(__dirname, "/client")));
app.set("view engine", "pug");
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/client/index.html")));
// app.get('/', (req, res) => {
//   console.log(__dirname);
//   res.sendFile(__dirname + '/index.html');
// });

app.get("/api/flubber", (req, res) => {
  console.log("flubber called");
  res.set('Content-Type', 'text/plain').send("jetzt aber..");
});

// app.listen(process.env["PORT"] || 3001, () => console.log("foo on port: " + process.env["PORT"]));
httpServer.listen(process.env["PORT"] || 3001);

console.log(`XXXXzwiebelgames.hosting running on port ${process.env["PORT"] || 3001}`);