const  router = require('express').Router()
const {addCollection,getCollection,getOneCollection,getUserCollection,deleteCollection}  = require('../Controllers/CollectionControllers')


router.post('/collection',addCollection)
router.get('/collection',getCollection)
router.get('/collection/get-by-id/:id',getOneCollection)
router.get('/collection/get-by-userId/:id',getUserCollection)
router.delete('/collection/:id',deleteCollection)





module.exports = router
