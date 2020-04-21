const jsonFile = require('jsonfile')

const getJasonFile = (file) => {
	return new Promise((resolve, reject) => {
		jsonFile.readFile(file, 'utf-8', (err, data) => {
			if (err) reject('problem with file!')
			const names = data.persons.map((person) => person.name)
			resolve(names)
		})
	})
}

module.exports = {getJasonFile}
