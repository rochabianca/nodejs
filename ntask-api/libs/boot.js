var https = require('https');
var fs = require('fs');

module.exports = app => {
	if (process.env.NODE_ENV !== "test") {
		const credentials = {
			key: fs.readFileSync("ntask.key", "utf8"),
			cert: fs.readFileSync("ntask.cert", "utf8")
		}

		app.db.sequelize.sync().done(() => {
			https.createServer(credentials, app)
				.listen(app.get("port"), () => {
					console.log(`NTask API - Port ${app.get("port")}`);
			});
		});
	
  	}	
};