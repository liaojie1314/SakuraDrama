import detail from './request'

const detailApi = data => {
    return detail.post({
        url: '/datetype',
        data
    })
}

export default {
    detailApi
}