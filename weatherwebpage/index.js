const express= require('express');
const hbs= require('hbs');
const path= require('path');
let app=express();
let paths= path.join(__dirname,"/partials")
app.use(express.static("public"));
app.set("view engine", "hbs");
hbs.registerPartials(paths);

app.get("/",(req, res)=>{
    res.render("index");
})
app.get("/about",(req, res)=>{
    res.render("about");
})
app.get("/weather",(req, res)=>{
    res.render("weather");
})
app.listen(8000);