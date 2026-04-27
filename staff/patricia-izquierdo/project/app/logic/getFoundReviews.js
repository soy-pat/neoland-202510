import { data } from '../data/index.js'

export function getFoundReviews(titleSearched) {
    if (typeof titleSearched !== 'string') throw new Error('invalid titleSearched type')
    if (titleSearched.length < 1) throw new Error('invalid titleSearched length')

    return fetch(`${import.meta.env.VITE_API_URL}/reviews/search?title=${encodeURIComponent(titleSearched)}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(error => { throw new Error('connection error') })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .catch(error => { throw new Error('json error') })
                    .then(reviews => reviews)

            return res.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body
                    throw new Error(message)
                })
        })
}