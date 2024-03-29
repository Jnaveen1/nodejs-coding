// const express = require('express')

// const app = express()
// const path = require('path')
// const dbPath = path.join(__dirname, '/gadgets.html')

// app.get('/', (request, response) => {
//   response.sendFile(dbPath)
// })

// module.exports = app

const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.sendFile('./gadgets.html', {root: __dirname})
})

app.listen(3000, () => {
  console.log('server is running....')
})

module.exports = app
