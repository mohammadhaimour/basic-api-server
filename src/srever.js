
"use strict";
require('dotenv').config();
const PORT = process.env.PORT || 3000;


const express = require("express");
const app = express();



const notFoundHandler = require("./error_handlers/404");
const serverErrorHandler = require("./error_handlers/500");
const foodRouter = require('./routes/food.route');
//const clothesRouter = require('./routes/clothes.route');


app.use(express.json());
app.use(foodRouter);
//app.use(clothesRouter);
app.use("*", notFoundHandler);
app.use(serverErrorHandler);


function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Server is listening on PORT ${PORT}`);
    });
}
module.exports = {
    app: app,
    start: start
};
