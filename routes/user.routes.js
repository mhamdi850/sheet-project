const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')


//authentification
router.post("/register", authController.signUp)
router.post("/login", authController.signIn)
router.get("/logout", authController.logout)

//user display 
router.get("/", userController.getAllUsers)
router.get("/:id", userController.userInfo)
//update user
router.put("/:id", userController.updateUser)
//delete user
router.delete("/:id", userController.deleteUser)

module.exports = router

