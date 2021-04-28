const express = require("express");
const cron = require("node-cron");
const path = require("path");

const app = express();
const index = require("./routes/index.route");
const secured = require("./routes/secured.route");

const addBlock = require("./blockchain/fileOperationsChain").addBlock;
const verifyJWT = require("./helpers/jwtSign").verify;

global.votes = [];
console.log(votes);

cron.schedule("*/40 * * * * *", () => {
  addBlock(votes);
  votes = [];
  console.log("running 40 sec");
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", index);
app.use("/secured", verifyJWT, secured);

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (!err) {
    console.log(`Listening on port ${port}`);
  }
});
