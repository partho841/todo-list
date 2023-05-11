const express = require('express');
const bodyParser=require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
var itemarray=[];
app.get("/",function(req,res){
var today = new Date();
var option={
    weekday:"long",
    day:"numeric",
    month:"long"
};
var day=today.toLocaleDateString("en-us",option);

res.render("list",{kindOfDay:day, items:itemarray});
});
app.post("/",function(req,res){
   item= req.body.newItems;
   res.redirect('/');
   itemarray.push(item);
})
app.listen(3000,function(){
    console.log("connected to the server");
})