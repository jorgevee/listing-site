import { listings } from "./listings";
const express = require('express');
const app = express();
const port = 9000;


app.get("/listings", (_req, res) => {
  res.send(listings);
});

//Start Port Server
app.listen(port);

console.log(`[app] : http://localhost:${port}`);