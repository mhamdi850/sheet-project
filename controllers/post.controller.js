const PostModel = require('../models/post.model')
const postModel = require("../models/post.model")
const UserModel = require('../models/user.model')
const ObjectID = require('mongoose').Types.objectId

module.exports.readPost = (req, res) => {
    PostModel.find((err, docs)=>{
        if(!err) res.send(docs)
        else console.log('error to get data: ' + err)
    })
}

module.exports.createPost =  async (req, res) => {
    const newPost = postModel({
        nature: req.body.nature,
        country: req.body.country,
        year: req.body.year,
        amount: req.body.amount,
        comments: []
    })
    try {
        const post = await newPost.save()
        return res.status(201).json(post)
    } catch (err) {
        return res.status(400).send(err)
    }
}

module.exports.updatePost = (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id)
    
    const updatedRecorded = {
        neture: req.body.nature
    }

    PostModel.findByIdAndUpdate (
        req.parmas.id,
        {$set: updatedRecord},
        {new: true}, 
        (err, docs) => {
            if(!err) res.send(docs)
                else console.log("Update error : " + err)
        }
    )

}

module.exports.deletePost = (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id)

    PostModel.findByIdAndRemove(
        req.params.id,
        (err, docs) =>{
            if(!err) res.send(docs)
            else console.log("Delete errore :" + err)
        }
    )
}

module.exports.commentPost = (req, send) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id)  
    try {
        return PostModel.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    comments: {
                        commenterId: req.body.commenterId,
                        commenterPseudo: req.body.commenterPseudo,
                        text: req.body.text,
                        timestamp: newDate().getTime()
                    }
                }
            },
            {new: true},
            (err, docs) => {
                if(!err) return res.send(docs)
                else return res.status(400).send(err)
            }
        )
    } catch (err) {
        return res.status(400).send(err)
    } 
}

module.exports.editCommentPost = (req, res) => {

}

module.exports.deleteCommentPost = (req, res) => {

}