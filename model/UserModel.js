const {Schema, model} = require("mongoose");

const UserSchema = new Schema(
    {
        username: {
            type: String,
            lowerCase: true,
            minlength: 4,
            maxlength: 20,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            minlength: 5,
            required: true,
        },
        commits: [{type: Schema.Types.ObjectId, ref: 'Commit'}],
        likes: [{type: Schema.Types.ObjectId, ref: 'Item'}],
        items: [{type: Schema.Types.ObjectId, ref: 'Item'}],
        collections:[{type:Schema.Types.ObjectId,ref:'Collection'}],
        isAuthor:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps: true,
    }
);

UserSchema.statics = {
    searchPartial: function (q, callback) {
        return this.find({
            $or:[{"username":new RegExp(q,'gi')}]
        })
    },
}

module.exports = model("User", UserSchema);



