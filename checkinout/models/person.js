const mongoose=require('mongoose');

const personSchema=new mongoose.Schema({
 name:{
    type:String
 },
 email:{
    type:String
 },
 contact:{
    type:Number
 },
 inTime:{
    type:String
 },
 outTime:{
    type:String,
    default:null,
 },
 dateAndDay:{
    type:String,
 },
 address:{
    type:String,
 }
});

const Person=mongoose.model('Person',personSchema);

module.exports=Person;