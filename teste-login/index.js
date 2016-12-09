var express    = require('express');
var bodyParser = require('body-parser');
var sessions   = require('express-session');

var session;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(sessions({
	secret: 'sahuashasuhasuhasushausahuashasuashash',
	resave: false,
	saveUnitialized: true
}))


app.get('/login', function(req, resp) {
	session = req.session;
	if(session.uniqueID) {
		resp.redirect('/redirects');
	}

	resp.sendFile('./files/login.html', {root: __dirname});	
});

app.post('/login', function(req, resp) {
	//resp.end(JSON.stringify(req.body));
	session = req.session;
	if(session.uniqueID) {
		resp.redirect('/redirects');
	}

	//if(req.body.username == 'admin' && req.body.password == 'admin') {
		session.uniqueID = req.body.username;
	//}
	resp.redirect('/redirects');
});

app.get('/logout', function(req, res) {
	req.session.destroy();
	res.redirect('/login');
});

app.get('/admin', function(req, resp) {
	session = req.session;

	if(session.uniqueID != 'admin') {
		resp.send('Acesso negado');
	} else {
		resp.send('Voce esta logado <br><br><a href="/logout">Deslogar</a>');
	}
})

app.get('/redirects', function(req, resp) {
	session = req.session;
	if(session.uniqueID == 'admin') {
		resp.redirect('/admin');
	} else {
		resp.send(req.session.uniqueID + ' nao encontrado <a href="/logout">KILL SESSION</a>');
	}
});

app.listen(1337, function() {
	console.log('listening at port 1337');
})