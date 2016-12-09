const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost: 5432/todo';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
	'CREATE TABLE clientes(email VARCHAR(50) PRIMARY KEY not null, nome VARCHAR(30), senha VARCHAR(20))');
query.on('end', () => {client.end() });