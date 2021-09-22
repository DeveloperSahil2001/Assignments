const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const Product=require('./models/product');
const seedDB=require('./seed');
const methodOverride=require('method-override');

mongoose.connect('mongodb://localhost:27017/blog-app')
.then(()=>{
 console.log('Connected with DB');
})
.catch((err)=>{
 console.log(err);
});


//seedDB();

app.set('view engine',"ejs");
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


app.get('/',(req,res)=>{
 res.send('Connected');
});

app.get("/products", async(req, res) => {
  const products= await Product.find({});
  res.render('index',{products});
});

app.get("/products/new", (req, res) => {
 res.render('new');
});

app.post("/products", async(req, res) => {
  const {name,price,desc}=req.body;
  await Product.create({name,price,desc});
  res.redirect('/products');
});

app.get("/products/:id", async(req, res) => {
  const {id}=req.params;
  const product=await Product.findById(id);
  res.render('show',{product});
});

app.get("/products/:id/edit",async(req, res) => {
  const {id}=req.params;
  const product=await Product.findById(id);
  res.render('edit',{product});
});

app.patch("/products/:id",async(req,res)=>{
  const {id}=req.params;
  const updatedProduct=req.body;
  await Product.findByIdAndUpdate(id,updatedProduct);
  res.redirect('/products');
});

app.delete("/products/:id",async(req,res)=>{
 const {id}=req.params;
 await Product.findByIdAndDelete(id);
 res.redirect('/products');
})

app.listen(2323,()=>{
 console.log('express app is listening at port 2323');
})