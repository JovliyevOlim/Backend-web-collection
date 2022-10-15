const  {Schema,model} = require('mongoose')

const PhotoSchema = new Schema({
    name:{
        type:String
    }
},{
    timestamps:true
})

module.exports = model('Photo',PhotoSchema)
