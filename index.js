const app = require('./app')
const PORT = 8080

app.listen(PORT, () => {
    console.log(`Todo app listening on port ${PORT}`)
})