# NTask-API

Código retirado do livro Contruindo APIS com NodeJS de Caio Ribeiro.

### Dependências:
* bcrypt
* body-parser
* compression
* consign
* cors
* express
* helmet
* jwt-simple
* morgan
* passport
* passport-jwt
* sequelize
* sqlite3
* winston

### Dependências Desenvolvedor:
* chai
* mocha
* supertest

### Instalando:
* Clone o repositório na pasta de sua preferência e execute:

```console
$ npm install
```

### Problemas encontrados no Windows:
* **Block-scoped declarations (let, const, function, class) not yet supported outside strict mode**:
  S: em vez de usar "node index.js" para executar, utilize "node --use_strict index.js"

* **error 'node-gyp rebuild'**
  S: sete a versão do Python para 2.7:

  ```console
  $ npm config -g set python C:/Python/Python27/python.exe
  ```
  Após isso, baixe e instale o Visual C++ Build Tools (http://landinghub.visualstudio.com/visual-cpp-build-tools) ou o Visual Studio 2015 (https://www.visualstudio.com/pt-br/vs/community/) e no cmd execute o comando:
  ```console
  $ npm config -g set msvs_version 2015
  ```
  Para mais informações visite: https://npmjs.com/package/node-gyp

* **NODE_ENV não é reconhecido como um comando interno**
  S: Problema ainda sem solução