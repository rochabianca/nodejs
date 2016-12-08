var Signin = require('./components/signin.js');
var Signup = require('./components/Signup.js');

class App {
	constructor(body) {
		this.signin = new Signin(body);
		this.signup = new Signup(body);
	}

	init() {
		this.signin.render();
		this.addEventListener();
	}
	addEventListener() {
		this.signinEvents();
		this.signupEvents();
	}

	signinEvents() {
	    this.signin.on("error", () => alert("Erro de autenticação"));
	    this.signin.on("signin", (token) => {
	      localStorage.setItem("token", `JWT ${token}`);
	      this.menu.render("tasks");
	      this.tasks.render();
	    });
	    this.signin.on("signup", () => this.signup.render());
  }
  signupEvents() {
	    this.signup.on("error", () => alert("Erro no cadastro"));
	    this.signup.on("signup", (user) => {
	      alert(`${user.name} você foi cadastrado com sucesso!`);
	      this.signin.render();
	    });
	}
}
module.exports = App;