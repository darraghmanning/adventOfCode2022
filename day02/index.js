const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, './input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');

function getScore(p1, p2){
	const shapeScore = {X: 1, Y: 2, Z: 3};
	const outcomeScore = {
		A: {X: 3, Y: 6, Z: 0},
		B: {X: 0, Y: 3, Z: 6},
		C: {X: 6, Y: 0, Z: 3},
	};

	return shapeScore[p2] + outcomeScore[p1][p2];
}

const index = {
	A: {X: 'Z', Y: 'X', Z: 'Y'},
	B: {X: 'X', Y: 'Y', Z: 'Z'},
	C: {X: 'Y', Y: 'Z', Z: 'X'},
};


var output1 = output2 = 0;
for(let i = 0; i < input.length; i += 1){
	var [p1, p2] = input[i].split(' ');
	output1 += getScore(p1, p2);
	output2 += getScore(p1, index[p1][p2]);
}

console.log(output1, output2);
