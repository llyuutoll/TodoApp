const express = require('express')
const todoRouter = require('./routers/todos')
const app = express()
const PORT = 8080

app.use('/api/todos', todoRouter)

app.listen(PORT, () => {
    console.log(`Todo app listening on port ${PORT}`)
})