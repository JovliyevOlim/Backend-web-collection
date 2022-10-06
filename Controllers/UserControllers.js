const User  = require('../model/UserModel')





const addUser = async (req,res)=>{
    try{
        const newUser =  await User.create({...req.body})
        res.status(201).json({
            success:true,
            message:'Created',
            newUser
        })
    }
    catch (err){
        res.send(err)
    }
}

const deleteUser  = async (req,res)=>{
    try{
        await  User.findByIdAndRemove(req.params.id)
        res.status(200).json({
            success:true,
            message:'Deleted',
        })
    }catch (err){
        res.send(err)
    }
}


const getUser = async (req,res)=>{
    try{
        const  users =  User.find().lean()
        res.status(200).json({
            success:true,
            message:'Send',
            object:users
        })
    }catch (err){
        res.send(err)
    }
}


const updatedUser  = async (req,res)=>{
     try{
         await  User.findByIdAndUpdate(req.params.id,{...req.body})
         const updated = User.findById(req.params.id)
         res.status(201).json({
             success:true,
             message:'Updated',
             updated
         })
     }catch (err){
         res.send(err)
     }
}




module.exports = {
    addUser,
    deleteUser,
    updatedUser,
    getUser
}
