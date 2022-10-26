const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware used to serve static files like css , images etc..
app.use('/dist',express.static('dist'));
// parser to parse data from HTML forms
app.use(bodyParser.urlencoded( {extended: true} ));


app.get("/" , (req , res)=>{
    res.sendFile(path.join(__dirname , "src" ,"index.html"));
})

app.get("/contact" , (req , res)=>{
    res.sendFile(path.join(__dirname , "src" ,"contact.html"));
})

app.post("/contact" , (req,res) => {
    // console.log(req.body);
    res.sendFile(path.join(__dirname , "src" , "lol.html"))
})

app.get("/blog" , (req , res)=>{
    res.sendFile(path.join(__dirname , "src" ,"blog.html"));
})

app.post("/failure" , (req,res) => {
    res.redirect("/")
})



const port = process.env.VARIABLE_NAME || 3000

app.listen(port , () => {
    console.log(`Server is running on port: ${port}` );
})

// TO DO
// Recreate a mailchimp account , get another api key , follow along the tutorial , manage audiences create success and failure pages
// d08d5203e8b4b09e4b610f517db74b12-us21
// 808af92e57
