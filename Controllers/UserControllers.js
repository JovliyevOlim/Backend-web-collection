const User = require('../model/UserModel')
const bcrypt = require('bcryptjs')
const validateUser = require("../validators/user-validator");

const addUser = async (req, res) => {
    //checking input data
    const {error} = validateUser(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    //checking if email is already in the database
    const username = await User.findOne({username: req.body.username})
    if (username) return res.status(400).json({
        success: false,
        message: "Username already exist"
    });
    const email = await User.findOne({email: req.body.email});
    if (email) return res.status(400).json({
        success: false,
        message: "Email already exist"
    });

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({...req.body, password: hashPassword});

    try {
        const savedUser = await user.save();
        res.status(201).json({
            success: true,
            savedUser
        })
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id)
        res.status(200).json({
            success: true,
            message: 'Deleted',
        })
    } catch (err) {
        res.send(err)
    }
}

const getUser = async (req, res) => {
    try {
        const pagelimit = 5
        const limit = parseInt(req.query.limit)
        const page = parseInt(req.query.page)
        const total = await User.countDocuments()
        if (req.url === '/user') {
            return res.redirect(`?page=1&limit=${pagelimit}`)
        }
        if (req.query.search) {
            const {search} = req.query
            console.log(search)
            const total = await User.searchPartial(search, (err) => {
                if (err) throw new Error
            }).countDocuments()
            const users = await User.searchPartial(search, (err) => {
                if (err) throw new Error
            }).sort({createdAt: -1})
                .skip((page * limit) - limit)
                .limit(limit)
                .lean()

            return res.status(200).json({
                success: true,
                object: {
                    users, total: Math.ceil(total / pagelimit)
                }
            })
        }


        const users = await User
            .find()
            .sort({createdAt: -1})
            .skip((page * limit) - limit)
            .limit(limit)
            .lean()
        return res.status(200).json({
            success: true,
            object: {
                users, total: Math.ceil(total / pagelimit)
            }
        })
    } catch (err) {
        res.send(err)
    }
}


const updatedUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        const oldpassword = user.password
        const {password} = req.body
        if (password === '') {
            await User.findByIdAndUpdate(req.params.id, {...req.body, password: oldpassword})
            const updated = await User.findById(req.params.id)
            return res.status(201).json({
                success: true,
                message: 'Updated',
                updated
            })
        } else {
            //Hash passwords
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            await User.findByIdAndUpdate(req.params.id, {...req.body, password: hashPassword})
            const updated = await User.findById(req.params.id)
            return res.status(201).json({
                success: true,
                message: 'Updated',
                updated
            })
        }

    } catch (err) {
        res.send(err)
    }
}


module.exports = {
    addUser,
    deleteUser,
    updatedUser,
    getUser
}
