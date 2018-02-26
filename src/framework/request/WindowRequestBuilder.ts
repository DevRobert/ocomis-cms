import { Request } from '.'

export default function buildRequest(): Request {
    return {
        path: window.location.pathname
    }
}
