const express = require('express')
const todoRouter = require('./routers/todos')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/todos', todoRouter)

module.exports = app