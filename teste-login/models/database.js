const pg = require('pg');
//const connectionString = process.env.DATABASE_URL || 'postgres://bianca:1234@localhost/postgres';

const connectionString = process.env.DATABASE_URL || 'postgres://bianca:1234@localhost/postgres';
const client = new pg.Client(connectionString);
client.connect();

module.exports = {
	Banco: function() {
		return connectionString;
	}
}

function Cria(login, senha) {
		client.query('INSERT INTO clientes(login, senha) values($1, $2)',
    		[login, senha]);
			console.log("Usuario criado com sucesso");
}

function Procura(login, senha) {
	const results = [];
	const query = client.query('SELECT * FROM Clientes WHERE login = $1 AND senha = $2', [login, senha]);
	query.on('row',(row) => {
		results.push(row);
		return results;
	});
}

Procura("bianca", "1234");

