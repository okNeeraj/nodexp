module.exports = authMiddleware = (req, res, next) => {
    console.log("Start :: authMiddleware");
    const authenticate = new Promise((resolve, reject) => {
        let isAuthenticate = true
        if (isAuthenticate == true) {
            resolve('Authentication Success.')
        } else {
            reject('Authentication failed!')
        }
    })

    authenticate
        .then((message) => {
            console.log(message)
            next()
        })
        .catch((message) => {
            console.log(message)
        })
}
