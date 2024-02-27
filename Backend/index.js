import express from "express";
import bodyParser from "body-parser";
import config from "./config.js";
import apiRouter from "./routes/api.js";
import cors from "cors";


const app = express();

app.use(cors())
//app.use(express.json())

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get all routes

app.use('/', apiRouter);

app.listen(config.port, () => {
  console.log(`API is running at http://localhost:${config.port}`);
});