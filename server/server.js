import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../common/App'

const app = express()

app.get('/api', (request, response) => {
    response.send({
        message: 'Hello from Node JS!'
    })
})

app.get('*', (request, response) => {
    let application = renderToString(<App/>)

    let html = `<!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>Ocomis CMS</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <div id="root">${application}</div>
        </body>
    </html>`

    response.send(html)
})

export default app
