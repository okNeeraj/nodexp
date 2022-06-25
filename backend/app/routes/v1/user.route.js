const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/auth.Middleware")
const userController = require("../../controllers/user.Controller")

router
    .use(authMiddleware)
    .get("/", userController)
    .post("/new", (req, res) => {
        res.send("Create a new user");
    })

    .route("/:userId")
    .get((req, res) => {
        res.send(`Get user with id ${req.params.userId}`);
    })
    .put((req, res) => {
        res.send(`Update user with id ${req.params.userId}`);
    })
    .delete((req, res) => {
        res.send(`Deleted user with id ${req.params.userId}`);
    });

module.exports = router;
