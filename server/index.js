const express = require('express')
const app = express()
const port = 3001
var dbHelpers = require('../database/index.js')

const path = require('path')

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => res.send('Hello World from server/index.js nodemon!'))




//handles post request at '/' endpoint.  Called 'Route?'
app.post('/customerInfo', (req, res) => {
  // console.log('REQUEST DATA ARRIVING IN SERVER: ', req.body)
  dbHelpers.addDataToDB(req.body, (data) => {
    console.log(data)
    res.send(data)
  })
})




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))