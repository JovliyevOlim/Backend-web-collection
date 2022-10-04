const User = require('../model/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')





const register = async(req, res) => {

    //checking if email is already in the database

    const email = await User.findOne({ email: req.body.email })
    if (email) return res.status(400).send('Email already exist')

    //Hash passwords
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({...req.body, password: hashPassword })

    try {
        const savedUser = await user.save()
        res.send({ user: user._id })
    } catch (error) {
        res.status(400).send(error)
    }
}


const login = async(req, res) => {
    //Checking if user is already in the database
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).send('Email or Password is error')
    }
    // Password is Correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Email or Password is error')


    //Create and assing a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.status(200).send({
        message: 'success',
        token: token,

    })

}

module.exports = {
    login,
    register
}
