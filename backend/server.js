const mongoose = require("mongoose");
const config = require("./app/config/config");
const app = require("./app/app");
const appConfig = config();



mongoose
    .connect(appConfig.db.mongoose.url, appConfig.db.mongoose.options)
    .then(() => {
        // console.log("Connected to MongoDB");
        let server = app.listen(appConfig.port, () => {
            //    console.log(`App listening on port ${port}`);
        });
    });
