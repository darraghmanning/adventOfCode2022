const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, './input.txt'), 'utf8')
	.toString()
	.trim();

const countCalories = input
	.split('\n\n')
	.map(x => {
		return x
			.split('\n')
			.map(n => parseInt(n))
			.reduce((sum, curr) => sum + curr, 0);
	}).sort((a, z) => z - a);

var $1 = countCalories[0];
var $2 = countCalories[0] + countCalories[1] + countCalories[2];
console.log($1, $2);
