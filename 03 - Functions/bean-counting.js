//initial definition of countBs

function countBs(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'B') count += 1;
	}
	return count;
}

function countChar(str, char) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) count += 1;
	}
	return count;
}

//rewrite of countBs to make use of countChar
function countBs(str) {
	return countChar(str, 'B');
}