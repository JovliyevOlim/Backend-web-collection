const router = require('express').Router()
const { register, login } = require('../Controllers/Auth')
const User  =  require('../model/UserModel')


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The Auto-generated id of user
 *         username:
 *           type: string
 *           description: username of User
 *         email:
 *           type: string
 *           description: email of User
 *         password:
 *           type: string
 *           descripton: password of User
 *       example:
 *         id: wefpj394f39fhrheif
 *         username: olim
 *         email: olim@gmail.com
 *         password: olim1234
 */


/**
 * @swagger
 * /api/register:
 *     post:
 *       description: 'To register a new user'
 *       requestBody:
 *        content:
 *         application/json:
 *           schema:
 *             $ref:'#definitions/RegisterUser'
 *       tags: [User]
 *       operationId: Register
 *       consumes:
 *         - 'application/json'
 *       parameters:
 *         - name: 'signup'
 *           in: 'body'
 *           required: true
 *           description: 'Registeration Payload'
 *           schema:
 *             $ref: '#/definitions/RegisterUser'
 *       responses:
 *         200:
 *           description: Successful registeration
 *           schema:
 *             $ref: '#/definitions/SuccessResponse'
 *         400:
 *           description: Email is already exist
 *
 *
 *
 *
 * definitions:
 *   RegisterUser:
 *     type: object
 *     required: [email,username,password]
 *     properties:
 *       email:
 *         type: string
 *       username:
 *         type: string
 *       password:
 *         type: string
 *   SuccessResponse:
 *     type: object
 *     properties:
 *       success:
 *         type: boolean
 *       message:
 *         type: string
 *
 *
 *
 */





router.post('/register', register)


/**
 * @swagger
 * /api/login:
 *     post:
 *       description: 'To Login new user'
 *       tags: [User]
 *       operationId: Login
 *       consumes:
 *         - 'application/json'
 *       parameters:
 *         - name: 'signIn'
 *           in: 'body'
 *           required: true
 *           description: 'Login Payload'
 *           schema:
 *             $ref: '#/definitions/LoginUser'
 *       responses:
 *         200:
 *           description: Successful login
 *           schema:
 *             $ref: '#/definitions/SuccessResponse'
 *         400:
 *           description: Email or Password error
 *
 * definitions:
 *   LoginUser:
 *     type: object
 *     required: [email,password]
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *   SuccessResponse:
 *     type: object
 *     properties:
 *       success:
 *         type: boolean
 *       message:
 *         type: string
 *
 * */
router.post('/login', login)





module.exports = router
