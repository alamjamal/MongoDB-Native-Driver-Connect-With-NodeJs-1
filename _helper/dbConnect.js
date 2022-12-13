const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const url = 'mongodb://0.0.0.0:27017'
const mongoConnect =  async() => {
    const client  = await MongoClient.connect(url)
     _db = client.db('alam');
    console.log("connected...");
    return _db
};


const getDb =()=>{
  return new Promise((resolve, reject) => {
    if (_db) {
        resolve(_db);
    } else {
        reject("error db");
    }
  })
}

const getMyDB =()=>{
  try{
    if (_db) {
      return _db
    }
    throw "Error"
  }catch(err){
    console.log(err);
  }
  
}


module.exports={
    mongoConnect,getDb, getMyDB
}