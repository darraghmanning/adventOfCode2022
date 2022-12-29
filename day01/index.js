const { input } = require('../util/index.js');

const countCalories = input
	.map(x => {
		return x
			.split('\n')
			.map(n => parseInt(n))
			.reduce((sum, curr) => sum + curr, 0);
	}).sort((a, z) => z - a);

console.log(countCalories[0]);
