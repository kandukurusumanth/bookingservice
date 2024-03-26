const amqplib= require('amqplib')
const  connect = async (userid)=>{
    try {
        
        const queue = 'noti queue'
        const connection= await amqplib.connect('amqp://localhost');
        const channel=await connection.createChannel();
        await channel.assertQueue(queue)
    
        sendmessage(channel,userid,queue)
    } catch (error) {
        console.log(error);
    }
   
   
}
async function sendmessage(channel,userid,queue){
    console.log(userid);
    try {
        await channel.sendToQueue(queue, Buffer.from(''+userid));

    } catch (error) {
        throw error
    }

}
module.exports={
    connect,
    sendmessage
}