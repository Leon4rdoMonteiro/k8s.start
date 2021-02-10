const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Full Cycle 2.0!</h1>')
})

server.listen(8000)