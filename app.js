"use strict";
import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('I love treehouse');
});

app.listen(3333, () => console.log('Listening on port 3333'));
