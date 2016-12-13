const pg = require('pg');
const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://bianca:1234@localhost/postgres';
const client = new pg.Client(connectionString);
client.connect();

var retorno;

var db =pgp(connectionString);

function Cria(login, senha) {
		client.query('INSERT INTO clientes(login, senha) values($1, $2)',
    		[login, senha]);
			console.log("Usuario criado com sucesso");
}

function Procura(login, senha) {
	db.one("SELECT * FROM clientes WHERE login = $1 AND senha = $2",[login, senha])
		.then(function(data) {
		//console.log(data.login);
		//console.log(data.senha);
			retorno = true;
		})
		.catch(function(error) {
			console.log("Login ou senha incorretos");
			retorno = false;
		});
}

/*Gambiarrento pra carai mas é o que funciona no momento*/
function Atualiza(login, senha, novaSenha) {
	db.one("SELECT * FROM clientes WHERE login = $1 AND senha = $2",[login, senha])
		.then(function(data) {
			db.none("UPDATE clientes SET senha=($1) WHERE login=($2)", [novaSenha, login])
				.then(function() {
					console.log("senha trocada com sucesso");
					return true;
				})
				.catch(function(error) {
					console.log("ERROR", error.message || error);
					console.log("Login incorreto");
					return false;
				});
		})
		.catch(function(error) {
			console.log("ERROR", error.message || error);
			return false;
		});
}

function Deleta(login, senha) {
	db.none("DELETE FROM clientes WHERE login=($1) AND senha=($2)", [login, senha])
		.then(function () {
			console.log("Usuario deletado com sucesso");
			return true;
		})
		.catch(function(error) {
			console.log("ERROR", error.message || error);
			return false;
		});
}
