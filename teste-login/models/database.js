const pg = require('pg');
const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://bianca:1234@localhost/postgres';
const client = new pg.Client(connectionString);
client.connect();

var db =pgp(connectionString);


function Cria(login, senha) {
		client.query('INSERT INTO clientes(login, senha) values($1, $2)',
    		[login, senha]);
			console.log("Usuario criado com sucesso");
}

function Procura(login, senha) {
	db.one("SELECT * FROM clientes WHERE login = $1 AND senha = $2",[login, senha])
	.then(function(data) {
		console.log(data.login);
		console.log(data.senha);
	})
	.catch(function(error) {
		console.log("ERROR", error.message || error);
	});
}

Procura("bianca", "1234");

