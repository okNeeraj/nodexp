module.exports = userController = (req, res) => {
    console.log('Start :: userController')
    res.render("users", { message: "Hi Iam rendering from ejs engine!" });
}