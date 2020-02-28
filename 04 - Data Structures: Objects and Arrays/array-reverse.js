function reverseArray(arr) {
    let newArr = []
    arr.forEach(elem => {
        newArr.unshift(elem)
    })
    return newArr;
}

function reverseArrayInPlace(arr) {
    let value;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        value = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = value;
    }
    return arr;
}