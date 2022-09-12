function sevenBoom(arr) {
	var new_arr = arr.join('')
	console.log(arr.join(''))
	if (new_arr.includes(7)) {
		return "Boom!";
	} else {
		return "there is no 7 in the array";
	}
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 8, 57]))


