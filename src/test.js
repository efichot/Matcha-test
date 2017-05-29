// const https = require('https');
// //const username = 'etiennefichot';
//
// function printMessage(name, nbBadges, jsPoints) {
// 	const message = `${name} has ${nbBadges} badges and ${jsPoints} points in JavaScript.`;
// 	console.log(message);
// }
//
// function print(username) {
// 	const request = https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
// 		console.log(res.statusCode);
// 		let body = '';
// 		res.on('data', (d) => {
// 			//console.log(d.toString());
// 			body += d.toString();
// 		});
// 		res.on('end', () => {
// 			//console.log(typeof body);
// 			try {
// 				const ret = JSON.parse(body);
// 				printMessage(username, ret.badges.length, ret.points.JavaScript);
// 			} catch (e) {
// 				console.error(e.message);
// 			}
//
// 		})
// 	})
// 	request.on('error', (e) => {
// 		console.log(`Problem with the request: ${e}`);
// 	})
// }
//
// const students = process.argv.slice(2);
//
//
// students.forEach((student) => {
// 	print(student);
// });

// let obj = {a: 1, b: 2, c: 3};
// let string = 'hello';
//
// // for (key in obj) {
// // 	console.log(key);
// // }
//
// for (c of string) {
// 	console.log(c);
// }

// let set = new Set();
// let tab = [1, 2, 3];
//
// set.add(tab);
// set.add({a: 1});
//
// // console.log(set.size);
// const obj = {{a: 1}, {b: 2}};
// const tab = Array.from(obj);
// console.log(tab);


const map = new Map();
map.set('Etienne', {age: 26, sexe: 'M'});
//
// for (let name of map) {
// 	console.log(name);
// }
console.log(map);
=======
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
