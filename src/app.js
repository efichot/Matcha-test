"use strict";
import express from 'express';

const app = express();

//add static file (static server setup)
app.use('/static', express.static(__dirname + '/public'));

// add pug into express
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	const foo = {
		name: 'Etienne',
		age: 26
	}
	res.render('index', {etienne: foo});
});

app.listen(3333, () => console.log('Listening on port 3333'));


const kek = {
	nom: 'Etienne',
	age: 26
}
