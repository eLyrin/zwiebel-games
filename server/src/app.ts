import express from "express";
import { createServer } from "http";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);


app.use(express.static(path.join(__dirname, "/client")));
app.set("view engine", "pug");

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/client/index.html")));

app.get("/api/flubber", (req, res) => {
  console.log("flubber called");
  res.set('Content-Type', 'text/plain').send("jetzt aber..");
});

// app.listen(process.env["PORT"] || 3001, () => console.log("foo on port: " + process.env["PORT"]));
httpServer.listen(process.env["PORT"] || 3001);

console.log("hallo weldsdst");