const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
// .env file
dotenv.config();
connectDB()




//Middlewares
app.use("/api/public", express.static("public"));
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./Route/AuthRoute"));
app.use("/api/item", require("./Route/myItems"));
app.use('/api',require('./Route/UserRoute'))
app.use('/api',require('./Route/CategoryRoute'))
app.use('/api',require('./Route/PhotoRoute'))
app.use('/api', require('./Route/CollectionRoute'))
app.use('/api',require('./Route/AuthorRoute'))

app.listen(process.env.PORT,()=>{
    console.log('Server running port:'+process.env.PORT)

    // console.log(`Swagger info Api is running at http://localhost:${process.env.PORT}/api-doc`)
})
