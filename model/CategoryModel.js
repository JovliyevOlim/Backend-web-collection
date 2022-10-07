const {Schema,model}  = require('mongoose')


const CategorySchema = new Schema({
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


module.exports = model('Category',CategorySchema)
