const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use('/dist',express.static('dist'));
app.use(bodyParser.urlencoded( {extended: true} ));

app.get("/" , (req , res)=>{
    res.sendFile(path.join(__dirname , "src" ,"index.html"));
})

app.get("/contact" , (req , res)=>{
    res.sendFile(path.join(__dirname , "src" ,"contact.html"));
})

app.post("/contact" , (req,res) => {
    // console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const msg = req.body.message;
    console.log(name , email , msg);
})

app.get("/blog" , (req , res)=>{
    res.sendFile(path.join(__dirname , "src" ,"blog.html"));
})

const port = process.env.VARIABLE_NAME || 3000

app.listen(port , () => {
    console.log(`Server is running on port: ${port}` );
})

// API Key
// ef5fa4b72a41c354d1706ffda2ba9129-us21
