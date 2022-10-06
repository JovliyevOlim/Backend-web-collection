const express = require('express')
const  app  = express()
const dotenv = require('dotenv')
const cors = require('cors')
const morgan  = require('morgan')
const connectDB = require('./config/db')
const swaggerJsDoc  = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
// .env file
dotenv.config()

// connect database
connectDB()

const  options  = {
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Rest Api Docs',
            version:"1.0.0",
            description:'Express APi'
        },
        servers:[
            {
                url:'https://localhost:5000/'
            }
        ]

    },
    apis:["./Route/*.js"]
};
const  swaggerdoc = swaggerJsDoc(options)
app.use("/api-doc",swaggerUI.serve, swaggerUI.setup(swaggerdoc))


app.get('/',(req,res)=>{
    res.send('welcome to mongo db')
})







//Middlewares
app.use('/public',express.static('public'))
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api',require('./Route/AuthRoute'))
app.use('/api',require('./Route/UserRoute'))
app.use('api',require('./Route/myItems'))

app.listen(process.env.PORT,()=>{
    console.log('Server running port:'+process.env.PORT)

    console.log(`Swagger info Api is running at http://localhost:${process.env.PORT}/api-doc`)
})

