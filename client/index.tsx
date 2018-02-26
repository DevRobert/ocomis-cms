import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { App } from '../common/App'

render(
    <AppContainer><App/></AppContainer>,
    document.getElementById('root')
)

console.log('initial rendering!')

module.hot.accept('../common/App', () => {
    console.log('reload!')

    render(
        <AppContainer><App/></AppContainer>,
        document.getElementById('root')
    )
})
