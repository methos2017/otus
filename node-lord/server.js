const http = require("http")
const hostname = "127.0.0.1"
const port = 3000
const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")

    let body = []

    req
      .on("data", chunk => {
        console.log("Greetings, Warlord!")
        body.push(chunk)
      })
      .on("end", () => {
        body = Buffer.concat(body).toString()
        // at this point, `body` has the entire request body stored in it as a string
      })

    // res.data("Bye world")

    // console.log(res)

    // Handle data from client
    // conn.on("data", function(data) {
    //   data = JSON.parse(data)
    //   console.log("Response from client: %s", data.response)
    // })

    // conn.write(JSON.stringify({ response: "Hey there client!" }))

    res.end("Hello World\n")
  }, 100)
})

server
  .on("data", chunk => {
    console.log("Greetings, Warlord!")
    body.push(chunk)
  })
  .on("end", () => {
    body = Buffer.concat(body).toString()
    // at this point, `body` has the entire request body stored in it as a string
  })

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

var io = require("socket.io")(server)

io.on("connection", function(socket) {
  socket.emit("news", { hello: "world" })
  socket.on("my other event", function(data) {
    console.log(data)
  })
})
