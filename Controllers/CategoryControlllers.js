const Category = require('../model/CategoryModel')

//Method POST
//des
const addCategory = async (req,res)=>{
    try{
        const newCategory =  await Category.create({...req.body})
        res.status(201).json({
            success:true,
            newCategory
        })
    }catch (err){
         res.send(err)
    }
}


//Method DELETE
//des
const deleteCategory = async (req,res)=>{
    try{
        await Category.findByIdAndRemove(req.params.id)
        res.status(200).json({
            success:true,
            message:'deleted'
        })
    }catch (err){
        res.send(err)
    }
}

//Method GET
//des
const getCategory = async (req,res)=>{
    try{
         const  categories = await Category.find().lean()
        res.status(200).json({
            success:true,
            object:categories
        })
    }catch (err){
        res.send(err)
    }
}


//Method PUT
//des
const updateCategory = async (req,res)=>{
    try{
        await Category.findByIdAndUpdate(req.params.id,{...req.body})
        const updated = await Category.findById(req.params.id)
        res.status(201).json({
            success:true,
            updated
        })
    }catch (err){
        res.send(err)
    }
}
module.exports = {
    addCategory,
    deleteCategory,
    getCategory,
    updateCategory
}
