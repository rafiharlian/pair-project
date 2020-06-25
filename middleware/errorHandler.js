module.exports = (err, req, res, next) => {
    let satatus
    let message
    switch (err.name) {
        case 'JsonWebTokenError':
            status = 400
            message = err.message
            break;
        default:
            status = err.status || 500
            message = err.message || err.msg || 'Internal server error'
            break;
    }
    res.status(status).json({ code: status, message})
}