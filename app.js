// requires libraries
const express = require('express');

// app setup

const app = express();

// middleware

// routes

// start server

app.listen(3000, () => {
	console.log('Gif Search listening on port localhost:3000!');
});

// Routes
app.get('/', (req, res) => {
	// Here you would look up the user from the database
	// Then render the template to display the users's info
	res.send('Hello Squirrel');
});
