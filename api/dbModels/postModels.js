const mongoose = require("mongoose")
const PostsModel = mongoose.model(
    "nodeApi",
    {
        Nature:{
            type: String,
            required: true
        },
        Country:{
            type: String,
            required: true
        },
        Year:{
            type: Date,
            required: true
        },
        Month:{
            type: String,
            required: true
        },
        Amount:{
            type: String,
            required: true
        }
    },
    "posts"
)

module.exports = {PostsModel}
