import { Request as ExpressRequest } from 'express'
import { Request } from '.'

export default function buildRequest(expressRequest: ExpressRequest): Request {
    return {
        path: expressRequest.path
    }
}
