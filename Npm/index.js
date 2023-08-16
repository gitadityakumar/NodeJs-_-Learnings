const { format } = require('date-fns');
const { v4:uuid } = require('uuid');  //here v4:uuid means import v4 as uuid 
//to create a packet.jason file just run npm init like git command

console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss')); //format for date 

console.log(uuid());  //it gives a unique id for log that can be used in serverlog
// ^(carrot) means update minor version and pathches if want.
//~ for updating patches in packet.json file
// * update all verison of packet.json









