const express = require('express')
const router = express.Router()
const { PostsModel } = require('../dbModels/postModels')
router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
       if(!err) res.send(docs)
       else console.log("error to get data")
    })
})
 
module.exports = router