var express = require('express');
var consign = require('consign');

const PORT = 3000;
const app = express();

app.set("json spaces", 4);

consign()
	.include("routes")
	.into(app);

app.listen(PORT, () => console.log('NTask API - Port ${PORT}'));