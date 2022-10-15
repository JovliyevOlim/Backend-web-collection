const router = require('express').Router()
const  {addUser,deleteUser, updatedUser,getUser} = require('../Controllers/UserControllers')

router.post('/user',addUser)
router.delete('/user/:id',deleteUser)
router.put("/user/:id",updatedUser)
router.get("/user",getUser)




module.exports = router
