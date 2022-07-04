const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: path.join(__dirname, "../../.env") })

module.exports = appConfig = () => {
    let envConfig = {
        appName: process.env.APP_NAME,
        apiVersion: process.env.API_VERSION,
        port: process.env.PORT,
        sunsineConversation: {
            appId: process.env.SUNSINE_APP_ID,
            username: process.env.SUNSINE_USER,
            password: process.env.SUNSINE_PSWRD,
        },
        db: {
            mongoose: {
                url: process.env.MONGODB_URL,
                options: {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                },
            },
        },
    };
    return envConfig
}