const {Schema,model}  = require('mongoose')


const CommitSchema = new Schema({
    title:{
        type:String,
        required:true,
        default:"",
    },
    authorId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    itemId:{
        type:Schema.Types.ObjectId,
        ref:'Item'
    }
},{
    timestamps:true
})


module.exports = model('Commit',CommitSchema)
