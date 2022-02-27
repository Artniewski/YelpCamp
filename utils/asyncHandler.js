module.exports = (wrappedFunction) => {
    return (res, req, next) => {
        wrappedFunction(res, req, next).catch(err => next(err))
    }
}
