const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

const logger = require("./logger");
const {
    router
} = require("./controllers");

app.use(cors());
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());
app.use(logger);
router(app);

module.exports = app;