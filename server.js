const http = require('http')
const util = require('./util')

const server = http.createServer((req, res) => {
	switch (req.url) {
		case '/':
			util.defaultRout(req, res)
			break
		case '/create-user':
			util.createUser(req, res)

			break
	}
})

server.listen(8000, () => console.log('server is running on port 8000'))
