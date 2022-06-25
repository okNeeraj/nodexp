const config = require('../config/config')
const SunshineConversationsApi = require("sunshine-conversations-client");

const appConfig = config();


const defaultClient = SunshineConversationsApi.ApiClient.instance;
const basicAuth = defaultClient.authentications["basicAuth"];
basicAuth.username = appConfig.sunsineConversation.username;
basicAuth.password = appConfig.sunsineConversation.password;

const apiInstance = new SunshineConversationsApi.MessagesApi();


const sendMessage = async (appId, conversationId, messageText, status) => {
    
  let messagePost = new SunshineConversationsApi.MessagePost();
  messagePost.setAuthor({ type: "business" });
  messagePost.setContent({ type: "text", text: messageText });
  if(status == false) {
    let response = await apiInstance.postMessage(
      appId,
      conversationId,
      messagePost
    );
    return response;
  }
   console.log("API RESPONSE:\n", response);
}

const conversationHandler = async () => {
    // console.log('abc')
}

module.exports = {
  sendMessage,
  conversationHandler,
};