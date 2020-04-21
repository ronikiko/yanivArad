const {parse} = require('querystring')

const add = function(num1, num2) {
	return num1 + num2
}

const defaultRout = function(req, res) {
	res.setHeader('Content-Type', 'text/html')
	res.write(
		"<form method='POST' action='/create-user'><input type='text' name='username'/><input type='text' name='name'/><button type='submit'>Send Data</button></form>"
	)
	return res.end()
}

// create user route
// method POST
const createUser = function(req, res) {
	let body = ''
	req.on('data', (chunks) => {
		body += chunks.toString()
	})
	req.on('end', () => {
		const theBody = parse(body)
		console.log(theBody)
	})
	res.statusCode = 302
	res.setHeader('Location', '/')
	return res.end()
}

// exporting all function in this file
module.exports = {
	add,
	defaultRout,
	createUser
}
