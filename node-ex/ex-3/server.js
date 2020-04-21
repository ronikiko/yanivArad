const http = require('http')
const util = require('./util')

const PORT = process.env.PORT || 4000

http
	.createServer((req, res) => {
		let id = 200
		if (req.url !== '/') id = req.url.substr(1)

		util
			.renderPersonHtml(req, id)
			.then((data) => {
				res.write(data)
				return res.end()
			})
			.catch((err) => console.log(err))
	})
	.listen(PORT, () =>
		console.log(`Server running on port ${PORT}`)
	)
