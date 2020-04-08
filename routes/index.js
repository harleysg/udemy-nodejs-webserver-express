module.exports = {
	index: function (req, res) {
		res.render("index", {
			title: "Home - express",
			message: "Hello there!",
			menu: [
				{ link: "/", text: "Home", active: "is-active" },
				{ link: "/about", text: "About" },
			],
		});
	},
	about: function (req, res) {
		res.render("about", {
			title: "About - express",
			message: "Hello there!",
			menu: [
				{ link: "/", text: "Home" },
				{ link: "/about", text: "About", active: "is-active" },
			],
		});
	},
	api: function (req, res) {
		const response = {
			name: "Fulanito",
			edad: 33,
			url: req.url,
		};
		res.send(response);
	},
};
