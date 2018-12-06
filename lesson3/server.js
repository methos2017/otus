const http = require('http')

http.createServer((req, res) => {
    setTimeout(() => {
        res.end('Hello, World!')
    }, 100)
}).listen(3000)