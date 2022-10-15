const User  = require('../model/UserModel')

const getAuthor = async (req,res)=>{
    try{
        const pagelimit = 5
        const limit = parseInt(req.query.limit)
        const page = parseInt(req.query.page)
        const total = await User.find({isAuthor: true}).countDocuments()
        if (req.url === '/author') {
            return res.redirect(`?page=1&limit=${pagelimit}`)
        }
        if (req.query.search) {
            const {search} = req.query

            const total = await User.find({isAuthor: true}).searchPartialTwo(search, (err) => {
                if (err) throw new Error
            }).countDocuments()
            const author = await User.find({isAuthor: true}).searchPartialTwo(search, (err) => {
                if (err) throw new Error
            }).sort({createdAt: -1})
                .skip((page * limit) - limit)
                .limit(limit)
                .lean()
            console.log(author)

            return res.status(200).json({
                success: true,
                object: {
                    author, total: Math.ceil(total / pagelimit)
                }
            })
        }


        const author = await User
            .find({isAuthor: true})
            .sort({createdAt: -1})
            .skip((page * limit) - limit)
            .limit(limit)
            .lean()
        return res.status(200).json({
            success: true,
            object: {
                author, total: Math.ceil(total / pagelimit)
            }
        })
    }catch (err){
        res.send(err)
    }
}


module.exports={
    getAuthor
}
