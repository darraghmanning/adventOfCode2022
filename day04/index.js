const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, './input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')

function fullyContains(n1, n2, n3, n4){
	if((n1 > n3 && n4 > n2) || (n3 > n1 && n2 > n4)){
		return 1;
	}
	else if(n1 == n3 || n2 == n4){
		return 1;
	}
	else{
		return 0;
	}
}

function overlaps(n1, n2, n3, n4){
	if((n1 > n3 && n4 >= n1) || (n3 >= n1 && n2 >= n3)){
		return 1;
	}
	else{
		return 0;
	}
}

var output1 = output2 = 0;
for(let i=0; i < input.length; i += 1){
	var args = input[i]
		.split(',')
		.join('-')
		.split('-')
		.map(x => parseInt(x));
	
	var [n1, n2, n3, n4] = args;
	output1 += fullyContains(n1, n2, n3, n4);
	output2 += overlaps(n1, n2, n3, n4);
}

console.log(output1, output2);
