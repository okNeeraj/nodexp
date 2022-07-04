const userModel = require('../models/user.Model')
const userData = require("../datas/userData");


const getUser = async (req, res) => {
    console.log('Entered :: userController.getUser')
    res.render("users/", {
        users: userData['users'],
    })
    // res.json(userData['users'])
}

const addUser = async (req, res) => {
    console.log("Entered :: userController.addUser")

    const newUser = new userModel({
        roll_no: 10003,
        name: "Madison Hyde",
        year: 3,
        subjects: ["DBMS", "OS", "Graph Theory", "Internet Programming"],
    })
    // newUser.save().then(() => console.log("One entry added"))

    res.render("users/add", {
        message: "Hi Iam rendering from ejs engine with the help of userController!",
    })
}

module.exports = {
    getUser,
    addUser,
}