const router = require('express').Router()
const  {addUser,deleteUser, updatedUser,getUser} = require('../Controllers/UserControllers')

/**
 * @swagger
 * definitions:
 *  User:
 *     type:object
 *         properties:
 *           name:
 *            type:string
 *            description: name of user
 *            example: 'Olim'
 *           email:
 *            type:string
 *            description: email of user
 *             xample:'olim@gmail.com'
 *            password:
 *             type:string
 *             description: password of email
 *             example :'12345'
 *
 *
 * */


 /**
 * @swagger
 * /api/user:
 *   post:
 *     summary:create employee
 *     description: create employee for the organisation
 *     requestBody:
 *      content:
 *       application/json:
 *         schema:
 *          $ref:'#definitions/User'
 *     responses:
 *       200:
 *        description: user created succesfully
 *       500:
 *        description: failure in creating user
 *
 *
 *
 *
 *
 */



//
// /**
//  * @swagger
//  * /api/user:
//  *     post:
//  *       description: 'Create a new user'
//  *       tags: [User]
//  *       operationId: Created
//  *       consumes:
//  *         - 'application/json'
//  *       parameters:
//  *         - name: 'Created'
//  *           in: 'body'
//  *           required: true
//  *           description: 'Create Payload'
//  *           schema:
//  *             $ref: '#/definitions/CreateUser'
//  *       responses:
//  *         200:
//  *           description: Created
//  *           schema:
//  *             $ref: '#/definitions/SuccessResponse'
//  *
//  * definitions:
//  *   CreateUser:
//  *     type: object
//  *     required: [email,username,password]
//  *     properties:
//  *       email:
//  *         type: string
//  *       username:
//  *         type: string
//  *       password:
//  *         type: string
//  *   SuccessResponse:
//  *     type: object
//  *     properties:
//  *       success:
//  *         type: boolean
//  *       message:
//  *         type: string
//  *
//  *
//  *
//  */



router.post('/user',addUser)
router.delete('/user/:id',deleteUser)
router.put("/user:id",updatedUser)





router.get("/user",getUser)




module.exports = router
