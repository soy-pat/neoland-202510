const log = message => console.log('%c' + new Date().toISOString() + ' %c' + message, 'color: greenyellow', 'color: tomato')

log('start')

new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(10)
        reject(new Error(10))
        log('START')

        log(10)
    }, 1000)
})
    .then(value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value + 10)
                //reject(new Error(value + 10))
                /**
                Promise.resolve('start')
                    .then(value => value + ' and go')
                    .then(value => value + ' and continue')
                    .then(value => { throw value + ' wtf' })
                    .then(value => value + ' sorry')
                    .catch(value => { throw value + ' yay'})
                    .then(value => { throw value + ' yuhu'})
                    .then(value => log(value))
                    .then(() => log('end'))
                    .catch(value => log(value))
                /**/

                log(value + 10)
            }, 2000)
        })
    })
    .then(value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value + 10)
                /**/
                async function main() {
                    try {
                        let value = await (async () => 'start')() // IIFE - Immediate Invoked Function Expression
                        value = await (async () => value + ' and go')()
                        value = await (async () => value + ' and continue')()
                        await (async () => { throw value + ' wtf' })()
                        value = await (async () => value + ' sorry')()
                    } catch (value) {
                        try {
                            await (async () => { throw value + ' yay' })()
                            await (async () => { throw value + ' yuhu' })()
                            await (async () => log(value))()
                            await (async () => log('end'))()
                        } catch (value) {
                            await (async () => log(value))()
                        }
                    }
                }

                log(value + 10)
            }, 3000)
        })
    })
    .catch(error => log(error))
    .then(() => log('end'))
main()
/**/

log('wait for queued callbacks')
log('END')