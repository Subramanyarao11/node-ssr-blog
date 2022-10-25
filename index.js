const express = require("express");

const app = express();
const path = require("path");
app.use('/dist',express.static('dist'));


app.get("/" , (req , res)=>{
    res.sendFile(path.join(__dirname , "src" ,"index.html"));
})

app.get("/contact" , (req , res)=>{
    res.sendFile(path.join(__dirname , "src" ,"contact.html"));
})

app.get("/blog" , (req , res)=>{
    res.sendFile(path.join(__dirname , "src" ,"blog.html"));
})

const port = process.env.VARIABLE_NAME || 3000

app.listen(port , () => {
    console.log(`Server is running on port: ${port}` );
})
