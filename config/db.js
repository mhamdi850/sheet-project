const mongoose = require("mongoose")
mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.zk3bk.mongodb.net/sheet-project",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .then(() => console.log('connected to Mongo DB')) 
    .catch((err) => console.log("failed to connect to Mongo DB", err))
