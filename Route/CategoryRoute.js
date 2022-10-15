const router = require('express').Router()
const  {addCategory,deleteCategory,getCategory, updateCategory} = require('../Controllers/CategoryControlllers')



router.post('/category',addCategory)
router.delete('/category/:id',deleteCategory)
router.get('/category',getCategory)
router.put('/category/:id',updateCategory)





module.exports = router
