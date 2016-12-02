var key = require("./.gitignore/sk.js");
module.exports = {
	database: "ntask",
	username: "",
	password: "",
	params: {
		dialect: "sqlite",
		storage: "ntask.squilite",
		define: {
			underscored: true
		}
	},
	jwtSecret: key,
	jwtSession: {session: false}
};