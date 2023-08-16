require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express()

const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middleware/not-found')
const ErrorHandlerMiddleware = require('./middleware/error-handler') 

//MIDDLEWARE
app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/', mainRouter)

app.use(notFoundMiddleware)
app.use(ErrorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async(req,res)=>{
    try {
       app.listen(port, console.log(`server is listening on port ${port}. . .`))
    } catch (error) {
        console.log(error);
        
    }
}

start()   