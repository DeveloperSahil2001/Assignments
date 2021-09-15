const express=require('express');
const app=express();
const path=require('path');
const {v4:uuid}=require('uuid');
const methodOverride=require('method-override');

let comments=[
    {
     id:uuid(),
     username:"Sahil",
     comment:"Hello from Sahil"
    },
    {
        id:uuid(),
        username:"Cat",
        comment:"Meeeeoooww"
    },
    {
        id:uuid(),
        username:"Dog",
        comment:"Wooof Woof"
    }
];

app.set('view engine','ejs');
app.use(methodOverride('_method'));
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
 res.send('Connected');
});

//to get all comments
app.get('/comments',(req,res)=>{
 res.render('index',{comments});
});

//to get a form to create comment
app.get('/comments/new',(req,res)=>{
 res.render('new');
});

//to add new comment
app.post('/comments',(req,res)=>{
 const newComment={
  "id":uuid(),
  ...req.body
 }

 console.log(req.body);
 comments.push(newComment);
 res.redirect('/comments');
});

//to get form to edit a comment
app.get('/comments/:id/edit',(req,res)=>{
 const {id}=req.params;
 const foundComment=comments.find((c)=>c.id==id);
 res.render('edit',{foundComment});
});

//to edit a comment
app.patch('/comments/:id',(req,res)=>{
 const {id}=req.params;
 const updatedComment=req.body.comment;
 const foundComment=comments.find((c)=>c.id===id);
 foundComment.comment=updatedComment;
 res.redirect('./');
});

//to delete a comment
app.delete('/comments/:id',(req,res)=>{
 const {id}=req.params;
 const newCommentsArray=comments.filter((c)=>c.id!==id);
 comments=newCommentsArray;
 res.redirect('./');
});


//to get a particular comment
app.get('/comments/:id',(req,res)=>{
 const {id}=req.params;
 const foundComment=comments.find((c)=>c.id===id);
 res.render('show',{foundComment});
});


app.listen(3000,()=>{
 console.log('server started at port 3000');
});
