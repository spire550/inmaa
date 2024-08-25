import express from "express";
import connection from "./DB/connection.js";
import dotenv from "dotenv";
import realEstate from "./src/module/normal/realEstate.router.js";
import commercialEstate from "./src/module/commercial/commercial.router.js";
import elbatenEstate from "./src/module/elbaten/elbaten.router.js";
import message from "./src/module/message/message.router.js";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
const whitelist = [];
app.use((req, res, next) => {
  console.log(req.header("origin"));
   /*if (!whitelist.includes(req.header("origin"))) {
    return next(new Error("Blocked")); */
  } 
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Private-Network", true);
  return next();
});
const port = process.env.PORT;
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use("/realEsate", realEstate);
app.use("/commercial", commercialEstate);
app.use("/elbaten", elbatenEstate);
app.use("/message", message);

app.use("*", (req, res) => {
  return res.json({ message: "Invalid URL" });
});
app.use((err, req, res, next) => {
  return res.json({ message: "Error", err: err.message, stack: err.stack });
});
await connection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
