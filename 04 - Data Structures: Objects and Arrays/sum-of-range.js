function range(start, end) {
	arr = [];	
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}

function sum(arr) {
    let result = 0;
    arr.forEach(num => {
        result += num;
    })
    return result
}

//Bonus

function range(start, end, step = 1) {
    arr = [];
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    }
    else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}