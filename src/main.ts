import * as express from "express";

const app: express.Application = express();
const port:number = 65000;

app.get("/", (req, res) => {
	res.send("Hello Typescript with Express!");
});

app.listen(port, () => {
	console.log(`Example listening on port ${port}`);
});
