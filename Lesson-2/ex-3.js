const http = require('http')
const util = require('./utils/util')

const PORT = process.env.PORT || 4000

http
	.createServer((req, res) => {
		if (req.url === '/') {
			util
				.getJasonFile('jsonData.json')
				.then((data) => console.log(data))
				.catch((err) => console.log(err))
		}
	})
	.listen(PORT, () => console.log(`Server running on port ${PORT}`))
