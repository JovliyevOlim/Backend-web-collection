const Photo = require('../model/PhotoModel')

//method POSt
//des add photo

const addPhoto = async (req, res) => {
    try {
        const newPhoto = await Photo.create({name: '/public/images/' + req.file.filename})
        res.status(201).json({
            message: 'success',
            object: newPhoto
        })
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    addPhoto
}
