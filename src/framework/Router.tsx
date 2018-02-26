import * as React from 'react'
import { Request } from './request/index'

export default class Router {
    getContent(request: any): React.ReactElement<any> {
        return (
            <div>
                <h1>Ocomis CMS</h1>
                <p>
                    TODO: Implement router!
                </p>
                <p>
                    The request path is: <b>{request.path}</b>
                </p>
            </div>
        )
    }
}
