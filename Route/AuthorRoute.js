const router = require('express').Router()
const {getAuthor} = require('../Controllers/AuthorControllers')

router.get('/author',getAuthor)










module.exports = router
