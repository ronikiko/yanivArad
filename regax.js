const arr = [1, 2, 3, 1, 1, 1, 3, 3, 2, 4]
const newA = []

for (let i = 0; i < arr.length; i++) {
	if (newA.includes(arr[i])) {
		continue
	} else {
		newA.push(arr[i])
	}
}
console.log(newA)

function Person(name, age) {
	this.name = name
	this.age = age

	this.fulname = function() {
		console.log(this.name)
	}
}

const a = new Person('Roni', 41)
a.fulname()
const b = new Person('Avi', 44)
b.fulname()
