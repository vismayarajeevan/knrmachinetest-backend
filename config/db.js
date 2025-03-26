const mongoose = require('mongoose')

const connectionstring = process.env.CONNECTIONSTRING

mongoose.connect(connectionstring).then(res=>{
    console.log('Mongodb connected successfully');
    
}).catch(err=>{
    console.log('Mongodb connection failed');
    
})

