const router = require('express').Router()
const {addPhoto} = require('../Controllers/PhotoControllers')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:'./public/images',
    filename:function (req,file,cb){
        cb(null,file.fieldname + "-" + Date.now()+file.originalname)
    }
})

const upload = multer({
    storage:storage
})

router.post('/images/upload',upload.single('file'),addPhoto)


module.exports = router
