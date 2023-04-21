import login from './request'

const loginApi = data => {
    return login.post({
        url: '/login',
        data
    })
}

const registerApi = data => {
    return login.post({
        url: '/signin',
        data
    })
}

export default {
    loginApi,
    registerApi
}