const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

require('./config/db')

const router = require('./routes/router')

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})
