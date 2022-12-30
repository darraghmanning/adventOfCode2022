const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, './input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getPriority(s1, s2, s3=alphabet){
	for(let j = 0; j < alphabet.length; j += 1){
		if(s1.includes(alphabet[j]) && s2.includes(alphabet[j]) && s3.includes(alphabet[j])){
			return j+1;
		}
	}
}

var output1 = 0;
for(let i=0; i < input.length; i += 1){
	var x = input[i].length / 2;
	const s1 = input[i].slice(0, x);
	const s2 = input[i].slice(x);
	output1 += getPriority(s1, s2);
}

var output2 = 0;
for(let i=0; i < input.length; i += 3){
	output2 += getPriority(input[i], input[i+1], input[i+2]);
}

console.log(output1, output2);
