import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import axios from "axios";

const app = express();
const PORT = process.env.TEST2_PORT;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${process.env.TEST3_URL}/`);
    const responseMessage = `This is the test2 server message<br>${response.data}`;
    res.send(responseMessage);
  } catch (error) {
    res.send("There is problem with test3 server");
  }
});

app.listen(PORT, () => {
  console.log("Test2 server has been started");
});
