import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.TEST5_PORT;

app.get("/", async (req, res) => {
  try {
    const responseMessage = `This is the test5 server message<br>`;
    res.send(responseMessage);
  } catch (error) {
    res.status(500).send("Error while connecting to the other server");
  }
});

app.listen(PORT, () => {
  console.log("Test5 server has been started");
});
