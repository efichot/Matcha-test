const https = require('https');
//const username = 'etiennefichot';

function printMessage(name, nbBadges, jsPoints) {
	const message = `${name} has ${nbBadges} badges and ${jsPoints} points in JavaScript.`;
	console.log(message);
}

function print(username) {
	const request = https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
		console.log(res.statusCode);
		let body = '';
		res.on('data', (d) => {
			//console.log(d.toString());
			body += d.toString();
		});
		res.on('end', () => {
			//console.log(typeof body);
			try {
				const ret = JSON.parse(body);
				printMessage(username, ret.badges.length, ret.points.JavaScript);
			} catch (e) {
				console.error(e.message);
			}

		})
	})
	request.on('error', (e) => {
		console.log(`Problem with the request: ${e}`);
	})
}

const students = process.argv.slice(2);


students.forEach((student) => {
	print(student);
});

module.export.print = print;
