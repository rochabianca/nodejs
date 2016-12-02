var key_teste = require("./.gitignore/sk_test.js");

/*
	Para criar sua chave você pode:
	 	- Criar o arquivo sk.js no diretório acima (ou o de sua escolha) e preenche-lo com o seguinte código:
	 			"module.exports = {
						key: function() {
							return "chave a ser adicionada";
						}
					}"
		- Simplesmente substituir a variável key por sua chave e apagar a linha de código acima;

*/

module.exports = {
	database: "ntask_test",
	username: "",
	password: "",
	params: {
		dialect: "sqlite",
		storage: "ntask.sqlite",
		logging: false,
		define: {
			underscored: true
		}
	},
	jwtSecret: key_teste;
	jwtSession: {session: false}
};