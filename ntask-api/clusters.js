var cluster = require('cluster');
var os = require('os');

const CPUS = os.cpus();
if(cluster.isMaster) {
	CPUS.forEach(() => cluster.fork());
	cluster.on("listening", worker => {
		console.log("Cluster %d connected", worker.process.pid);
	});

	cluster.on("disconnect", worker => {
		console.log("Cluster %d disconnect", worker.process.pid);
	});
	cluster.on("exit", worker => {
		console.log("Cluster %d is dead", worker.process.pid);
		cluster.fork();
		//Inicial um novo cluster se o velho morrer
	});
} else {
	require("./index.js");
}