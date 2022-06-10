'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const server = require('./src/srever')
const { db } = require('./src/models/index.model');

db.sync().then(() => {
    server.start(PORT);
}).catch(console.error)

