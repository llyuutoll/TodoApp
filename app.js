const express = require('express')
const todoRouter = require('./routers/todos')
const app = express()

app.use('/api/todos', todoRouter)

module.exports = app