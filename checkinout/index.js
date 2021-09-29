const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path=require('path');
const Person=require('./models/person');
const seedDB=require('./seed');
const methodOverride=require('method-override');
const API_kEY="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";
const sgMail=require('@sendgrid/mail');

sgMail.setApiKey(API_kEY);

const message={
  to:'',
  from:'sahil0023.cse19@chitkara.edu.in',
  subject:'',
  text:'',
  html:'',
}


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/entryDB')
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log(err);
    });


//seedDB();


app.get("/", (req, res) => {
    res.send('Connected');
});


app.get("/persons", async(req, res) => {
  const persons=await Person.find({});
  res.render('index',{persons});
});


app.get("/persons/new",(req,res)=>{
 res.render('new');
})

app.post("/persons", async(req, res) => {
  message.to=req.body.email;
  message.subject="Welcome to MVT Pvt ltd";
  message.text=`Dear ${req.body.name}, Welcome to Mvt pvt ltd. You just checked in at ${req.body.inTime} on ${req.body.dateAndDay}. Hope you will enjoy your day here.`;
  message.html=`<h1>Dear ${req.body.name}, Welcome to Mvt pvt ltd. You just entered in the building at ${req.body.inTime} on ${req.body.dateAndDay}. Hope you will enjoy your day here.</h1>`;
  sgMail.send(message)
  .then(()=>{
   console.log('mail sent successfully');
  })
  .catch((err)=>{
   console.log(err);
  });
  const {name,email,contact,inTime,dateAndDay,address}=req.body;
  await Person.create({name,email,contact,inTime,dateAndDay,address});
  res.redirect('/persons');
});

app.get("/persons/:id", async(req, res) => {
  const {id}=req.params;
  const personFound= await Person.findById(id);
  res.render('show',{personFound});
});

app.get("/persons/:id/edit", async(req, res) => {
  const {id}=req.params;
  const personFound=await Person.findById(id);
  res.render('edit',{personFound});
});

app.patch("/persons/:id",async(req,res)=>{
 if(req.body.outTime){
  message.subject="Thank you for visiting MVT Pvt ltd";
  message.text=`Dear ${req.body.name}, You just checked out at ${req.body.outTime} on ${req.body.dateAndDay}. Hope you enjoyed your day there.`;
  message.html=`<h1>Dear ${req.body.name}, You just checked out at ${req.body.outTime} on ${req.body.dateAndDay}. Hope you enjoyed your day there.</h1>`;
  sgMail.send(message)
  .then(()=>{
   console.log('mail2 sent successfully');
  })
  .catch((err)=>{
   console.log(err);
  });
 }
 const {id}=req.params;
 const updatedPerson=req.body;
 await Person.findByIdAndUpdate(id,updatedPerson);
 res.redirect('/persons');
});

app.delete('/persons/:id',async(req,res)=>{
 const {id}=req.params;
 await Person.findByIdAndDelete(id);
 res.redirect('/persons');
})



app.listen(3000,()=>{
    console.log("Server running on port 3000 🔥");
});