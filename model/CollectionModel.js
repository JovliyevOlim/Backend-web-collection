const  {Schema,model} = require('mongoose')

const CollectionSchema  = new Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type: String,
        default: "",
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    items:[{type:Schema.Types.ObjectId,ref:'Item'}],
    authorId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
},{
    timestamps:true
})

module.exports = model('Collection',CollectionSchema)
