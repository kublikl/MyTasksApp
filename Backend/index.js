import express from "express";
import bodyParser from "body-parser";
import config from "./config.js";
import apiRouter from "./routes/api.js";


const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get all routes

app.use('/', apiRouter);

app.listen(config.port, () => {
  console.log(`API is running at http://localhost:${config.port}`);
});