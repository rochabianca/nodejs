var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path')

let db = null;

module.exports = app => {
	if(!db) {
		const config = app.libs.config;
		const sequelize = new Sequelize(
			config.database,
			config.username,
			config.passoword,
			config.params
		);

		db = {
			sequelize,
			Sequelize,
			models: {}
		};

		const dir = path.join(__dirname, "models");
		fs.readdirSync(dir).forEach(file => {
			const modelDir = path.join(dir, file);
			const model = sequelize.import(modelDir);
			db.models[model.name] = model;
		});
		Object.keys(db.models).forEach(key => {
			db.models[key].associate(db.models);
		});
	}
	return db;
};