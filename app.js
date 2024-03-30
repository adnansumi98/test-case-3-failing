const express = require('express')

const app = express()

app.get('/gadgets', async (request, response) => {
  response.sendFile('./gadgets.html', {root: __dirname})
})

module.exports = app
