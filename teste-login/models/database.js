const pg = require('pg');
const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://bianca:1234@localhost/postgres';
const client = new pg.Client(connectionString);
client.connect();

var retorno;

var db =pgp(connectionString);

/*For tests sake*/

function Cria(login, senha) {
		client.query('INSERT INTO clientes(login, senha) values($1, $2)',
    		[login, senha]);
			console.log("Usuario criado com sucesso");
}

function Procura(login, senha) {
	db.one("SELECT * FROM clientes WHERE login = $1 AND senha = $2",[login, senha])
		.then(function(data) {
			var string = JSON.stringify(data);
			console.log(string);
			return string;
		}, 3000)
		.catch(function(error) {
			console.log("Login ou senha incorretos");
			return(0);
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



module.exports = {
	Cria: function (login, senha) {
		client.query('INSERT INTO clientes(login, senha) values($1, $2)',
    		[login, senha]);
			console.log("Usuario criado com sucesso");
	},

	Procura: function(login, senha) {
		db.one("SELECT * FROM clientes WHERE login = $1 AND senha = $2",[login, senha])
		.then(function(data) {
		//console.log(data.login);
		//console.log(data.senha);
			callback(data);
		})
		.catch(function(error) {
			console.log("Login ou senha incorretos");
			callback(0);
		});
	},

	Atualiza: function(login, senha, novaSenha) {
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
	},

	Deleta: function(login, senha) {
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
}

console.log(Procura("bianca", "1234"));