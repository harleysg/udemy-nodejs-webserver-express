const { PORT } = require("../config/index.js");
const { index, about, api } = require("../routes/index.js");
const express = require("express");
const app = express();

/**
 * MIDDELWARES
 */
app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug");

app.get("/", index);

app.get("/about", about);

app.get("/api", api);

app.listen(PORT, () => {
	console.log(` Puerto ${PORT} escuchando... `);
});
