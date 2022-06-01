// requires libraries
const express = require('express');

// app setup

const app = express();

// middleware

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// routes

app.get('/', (req, res) => {
	// Here you would look up the user from the database
	// Then render the template to display the users's info
	res.send('Hello Squirrel');
});

app.get('/greetings/:name', (req, res) => {
	// grab the name from the path provided
	const name = req.params.name;
	// render the greetings view, passing along the name
	res.render('greetings', { name });
});
app.get('/gif', (req, res) => {
	// set the url of the gif
	const gifUrl =
		'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245';
	// render the hello-gif view, passing the gifUrl into the view to be displayed
	res.render('hello-gif', { gifUrl });
});

// start server

app.listen(3000, () => {
	console.log('Gif Search listening on port localhost:3000!');
});
