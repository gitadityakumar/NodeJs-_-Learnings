const fs = require('fs');
const rs = fs.createReadStream('./fileSystem/lorem.txt', {encoding:'utf8'});

const ws = fs.createWriteStream('./fileSystem/new-lorem.txt');


// rs.on('data',(datachunck)=>{
//     ws.write(datachunck);
// })
rs.pipe(ws);
