import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Router from '../../framework/Router'
import buildRequest from '../../framework/request/WindowRequestBuilder'

render(
    new Router().getContent(buildRequest()),
    document.getElementById('root')
)

module.hot.accept('../../framework/Router', () => {
    render(
        new Router().getContent(buildRequest()),
        document.getElementById('root')
    )
})
