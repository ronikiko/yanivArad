// reverse string
const rev1 = (str) => {
	let reversed = ''
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i]
	}
	return reversed
}

const rev2 = (str) =>
	str
		.split('')
		.reverse()
		.join('')

let words = 'the new world  as become'
let reg = /new/g
let a = words.match(reg)
console.log(a)

const same = [23, 1, 2, 3, 4, 4, 1, 2, 3, 23]
const newArr = []
for (let i = 0; i < same.length; i++) {
	if (newArr.includes(same[i])) {
		continue
	} else {
		newArr.push(same[i])
	}
}

console.log(newArr.sort((a, b) => b - a))

var stringArray = ['Blue', 'Humpback', 'Beluga']
stringArray.join().toString()
console.log(stringArray.sort())
