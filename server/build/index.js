"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listings_1 = require("./listings");
const express = require('express');
const app = express();
const port = 9000;
app.get("/listings", (_req, res) => {
    res.send(listings_1.listings);
});
//Start Port Server
app.listen(port);
console.log(`[app] : http://localhost:${port}`);
