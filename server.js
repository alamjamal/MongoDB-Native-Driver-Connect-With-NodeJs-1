require('rootpath')();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const bootApp=()=>{
    app.listen(4001,() => {
        console.log('Server listening on port ');
        console.log(process.version);
        }).on('error', function(err){
        console.log('on error handler');   
        console.log(err);
    })
}
app.use('/public', require('./route/public.route'));
const {mongoConnect} = require('./_helper/dbConnect');
mongoConnect()
    .then(()=>{
            bootApp()
    })
    .catch(err=>console.log(err))