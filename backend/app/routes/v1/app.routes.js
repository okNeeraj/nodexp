const express = require('express');
const userRoute = require("./user.route");
const logger = require('../../middlewares/logger.Middleware');
const whatsappNotification = require("../../services/whatsappNotification");


const router = express.Router();


router
  .use(logger)
  .get("/", (req, res) => {
    res.render("index", { message: "Hi Iam rendering from ejs engine!" });
  })

  .use("/users", userRoute);


// Whatsapp notification
const config = require("../../config/config");
const appConfig = config();
const appId = appConfig.sunsineConversation.appId;
const conversationId = "f120eb3ff8edb72a7493d367";

router.post("/whatsapp", (req, res) => {
    let status = false;
    if (status == false) {
      var messageText = "Hi Bhaskar";
      whatsappNotification.sendMessage(appId, conversationId, messageText, status);
    }
    res.end('Message successfully sent')
})

whatsappNotification.conversationHandler()

module.exports = router