module.exports = loggerMiddleware = (req, res, next) => {
    console.log(`${req.originalUrl}`);
    console.log("<====== Start - Logger ======>");
    next();
    console.log("<======= End - Logger =======>");
};
