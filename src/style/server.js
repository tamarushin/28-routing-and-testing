'use strict';
const express = require('../../../../../Library/Caches/typescript/2.9/node_modules/@types/express');
const app = express();
const port = process.env.PORT || 8888;
app.use(express.static('./build'));
app.listen(port, () => console.log(`Listening on port ${port}`));