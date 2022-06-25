module.exports = authMiddleware = (req, res, next) => {
    console.log("Start :: authMiddleware");
    next();
};
