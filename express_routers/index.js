const express = require('express')
const logger = require('./middleware/logger')
const app = express() //express binnenhalen
const port = 3000 //openen op een bepaalde poort
const apiV1Todosrouter = require('./routers/api/v1/todos');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v1/todos', apiV1Todosrouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})