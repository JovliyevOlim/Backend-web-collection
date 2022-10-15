const router = require('express').Router()
const { register, login } = require('../Controllers/Auth')
const User  =  require('../model/UserModel')




router.post('/register', register)

router.post('/login', login)





module.exports = router
