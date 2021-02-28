const mongoose = require('mongoose') 
mongoose.connect(
    "mongodb://localhost:27017/nodeApi",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("mongoDB connected!")
        else console.log("connection error:" + err)
    }

)