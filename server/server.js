import express from 'express'

const app = express()

app.get('/api', (request, response) => {
    response.send({
        message: 'Hello from Node JS!'
    })
})

export default app
