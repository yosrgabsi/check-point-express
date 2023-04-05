


const express = require('express');

const app = express();
const port =5000;
const AddDate = require('./middleware/middle')
// app.use('/static',express.static(__dirname+"/Public"))

//on doit mettre les fichiers en une route specifique


app.use(express.static('Public'));
app.get('/home',(req,res)=>{
    res.sendFile(__dirname + '/Public/home.html')
})

app.get('/outOfService',(req,res)=>{
    res.sendFile(__dirname + '/Public/outOfService.html')
})


app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/Public/contact.html')
})



//creation de la 1ere route
// app.get('/', (req,res)=>{
//     res.send("welcome ")
// })
// //ajout du middleware
 app.get('/middleware',AddDate,(req,res,next)=>{
 res.send("the date: " +req.date);
 })
 app.get('/NOmiddleware',AddDate,(req,res,next)=>{
     console.log(req)
     res.send("the date is: "+req.date);
 })



//listen to port 
app.listen(port,(err)=>{
    err? console.log(err): console.log(`go to ${port}`);
})