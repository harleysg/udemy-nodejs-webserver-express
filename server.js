const express = require("express");
const app = express();

/**
 * Midelware
 */
app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug");

app.get("/", function(req, res) {
	res.render("index", {
		title: "Home - express",
		message: "Hello there!",
		menu: [
			{ link: "/", text: "Home", active: "is-active" },
			{ link: "/about", text: "About" }
		]
	});
});

app.get("/about", function(req, res) {
	res.render("about", {
		title: "About - express",
		message: "Hello there!",
		menu: [
			{ link: "/", text: "Home" },
			{ link: "/about", text: "About", active: "is-active" }
		]
	});
});

app.get("/api", function(req, res) {
	const response = {
		name: "Fulanito",
		edad: 33,
		url: req.url
	};
	res.send(response);
});

app.listen(3000, () => {
	console.log("Puerto 3000 escuchando...");
});
