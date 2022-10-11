import express from 'express'
import { indexRouter } from './routes';
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const { statusUpdater } = require("./controllers.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
import cors from 'cors';
import {config} from "dotenv";



config()

const app = express()

const port = 5000




app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// Use JSON parser for all non - webhook 
app.use((req, res, next) => { if (req.originalUrl === '/webhook') { next(); } else { express.json()(req, res, next); } });
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json())
app.use(cors())
app.use("/", indexRouter);

app.use((req?, res?) => {
  const status = req.status || 500;
  const message = req.message || req;
  console.error(message);
  res.status(status).send(message);
});


//------------------------------------------------------------
const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
