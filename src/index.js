const express= require('express');
const app = express();
const {server} =require('./config/index');
const apirouter= require('./router')
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/apirouter',apirouter)
app.listen(server.PORT ,()=>{
    console.log(`listening to port : ${server.PORT}`);
   

})
