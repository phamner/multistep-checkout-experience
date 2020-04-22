const express = require('express')
const app = express()
const port = 3001

const path = require('path')

app.use(express.static(path.join(__dirname, "../client/dist")));



app.use(express.static('../client/dist'))

app.get('/', (req, res) => res.send('Hello World from server/index.js nodemon!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))