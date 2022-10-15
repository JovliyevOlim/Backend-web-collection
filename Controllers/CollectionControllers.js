const Collection = require('../model/CollectionModel')
const Item = require('../model/itemModel')
const User = require('../model/UserModel')

const addCollection = async (req, res) => {
    try {
        const {name, desc, categoryId, items, authorId} = req.body
        let a = []
        const newCollection = await Collection.create({
            name: name,
            desc: desc,
            categoryId: categoryId,
            authorId: authorId,
            items: a
        })

        const item = await Item.create(items.map(item => ({
            ...item, categoryId, authorId, collectionId: newCollection._id
        })))

        item.map(item => {
            a.push(item._id)
        })

        await Collection.findByIdAndUpdate(newCollection._id, {
            name: name,
            desc: desc,
            categoryId: categoryId,
            authorId: authorId,
            items: a
        })

        await User.findOneAndUpdate(authorId, {
            isAuthor: true,
            $push: {collections: newCollection._id, items: {$each: a}},
        })

        const updatedCollection = await Collection.findById(newCollection._id).lean()
        return await res.status(201).json({
            success: true,
            updatedCollection
        })

    } catch (err) {
        res.send(err)
    }
}

const getCollection = async (req, res) => {
    try {
        const getCollection = await Collection.find({})
            .populate('categoryId authorId items').lean()
        console.log(getCollection)
        res.status(200).json({
            success: true,
            object: getCollection
        })
    } catch (err) {
        res.send(err)
    }
}


const getOneCollection = async (req,res)=>{
    try {
        const getCollection = await Collection.findById(req.params.id)
            .populate('categoryId authorId items').lean()
        console.log(getCollection)
        res.status(200).json({
            success: true,
            object: getCollection
        })
    } catch (err) {
        res.send(err)
    }
}

const getUserCollection = async (req,res)=>{
    try {
        const getCollection = await Collection.find({authorId: req.params.id})
            .populate('categoryId authorId items').lean()

        res.status(200).json({
            success: true,
            object: getCollection
        })
    } catch (err) {
        res.send(err)
    }
}



const deleteCollection =  async (req,res)=>{
    try{
        const collection = await Collection.findById(req.params.id)
        const {items} = collection
        await Item.deleteMany({_id:{$in:items}})
        await Collection.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message:'Deleted'
        })
    }catch (err){
        res.send(err)
    }
}




module.exports = {
    addCollection,
    getCollection,
    getOneCollection,
    getUserCollection,
    deleteCollection
}
