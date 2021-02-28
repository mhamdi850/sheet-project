const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        nature: {
            type: String,
            required: true
        },

        country: {
            type: String,
            trim: true
        },

        year: {
            type: Number,
            trim: true,
            maxlenght: 4
        },

        amount: {
            type: Number, 
            trim: true
        },

        comments: {
            type: [
                {
                    commenterId:String,
                    commenterPseudo: String,
                    text: String,
                    timestamp: Number,
                }
            ],
            required: true,
        },
    },
    {
        timestamp: true,
    }
)

module.exports = mongoose.model('post', PostSchema)