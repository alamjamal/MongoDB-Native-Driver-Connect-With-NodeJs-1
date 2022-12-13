const {publicValidate} = require('../validate/public.validate')
const crypto = require('crypto');

const {mongoConnect, getDb, getMyDB} = require('../_helper/dbConnect');

let db;
const MyDB =async ()=>{
    try{
        db=await getDb()
    }catch(err){
        console.log(err);
    }
}


const register = async(req, res)=>{
    const {error} = await publicValidate(req.body, req.method)
    if (error) return res.status(400).json({message:error.message})
    res.status(200).json({message:"everything is fine"})
}


const addPassCode = async(req, res)=>{
    const users  = await db.collection('users').find().toArray()
    res.status(200).json({message:"everything is fine", users:users})
}

setTimeout(function(){
    MyDB()
}, 1000); 




module.exports={register, addPassCode}