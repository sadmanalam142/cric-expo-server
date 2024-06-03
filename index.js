require("dotenv").config();
import express, { json } from "express";
const app = express();
import cors from "cors";
const port = process.env.PORT;

app.use(cors());
app.use(json());

async function run() {
  try {
   
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Route is working");
});

app.listen(port, (req, res) => {
  console.log("App is listening on port :", port);
});