const express = require('express')
const cookieParser = require('cookie-parser')
const app = express(); 
const port = 8000; 

// parse cookies

app.use(cookieParser());
app.use(express.urlencoded); 

// use express router
app.use('/' , require("./routes"));

app.set('view engine' , 'ejs'); 
app.set('views' , './views');

app.listen(port , (err)=>{

    if(err){
        console.log(`Error Occured : ${err}`)
        return
    }
    console.log(`Server is running on port ${port}`)
    
})