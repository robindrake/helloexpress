const express = require("express");
const app = express();
const port = 65000;

app.get("/", (req, res) => {
	res.send("Hello Express!");
});

app.all("/secret", (req, res, next) => {
	res.send("the secret route");
	next();
});

app.listen(port, () => {
	console.log(`Example listening on port ${port}`);
});
