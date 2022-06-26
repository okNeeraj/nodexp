// const getUser = async (req, res) => {
//     console.log('Entered :: userController.getUser')
//     res.render("users", { 
//         message: "Hi Iam rendering from ejs engine with the help of userController!",
//     })
// }

// const addUser = async (req, res) => {
//     console.log("Entered :: userController.addUser")
//     res.render("users", {
//         message: "Hi Iam rendering from ejs engine with the help of userController!",
//     })
// }

// module.exports = {
//     getUser,
//     addUser,
// }

module.exports = userController = (req, res) => {
    console.log('Entered :: userController')
    res.render("users", { 
        message: "Hi Iam rendering from ejs engine with the help of userController!",
    })
}