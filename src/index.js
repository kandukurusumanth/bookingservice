const express= require('express');
const app = express();
const amqplib = require('amqplib');
const {server} =require('./config/index');

const apirouter= require('./router/index')
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/api',apirouter)
app.use('/bookingservice/api',apirouter)
app.listen(server.PORT ,async ()=>{
    console.log(`listening to port : ${server.PORT}`);
    
    console.log('queue conntecd');
   

})
