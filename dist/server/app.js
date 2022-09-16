import express from "express";
const app = express();
app.use(express.static('client'));
app.listen(process.env["PORT"] || 3001, () => console.log("foo on port: " + process.env["PORT"]));
