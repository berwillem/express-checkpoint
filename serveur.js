
const express = require('express');
const app = express();
// middelwear :::
app.use('/home.ejs', function time (req, res, next){
    return Date.now();
    next();
 });

// routes ::::::
app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/",(req,res) => {
    res.render('index') 
})
app.get("/home.ejs",(req,res) => {
    res.render('index') 
})
app.get("/contact.ejs",(req,res) => {
    res.render('contact') 
})
app.get("/services.ejs",(req,res) => {
    res.render('services') 
})

app.listen(3000)
