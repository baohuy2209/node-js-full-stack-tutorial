const fs = require('fs'); 
const filename = process.argv; 
if (filename[2] == 'add'){
    fs.writeFileSync(filename[3], filename[4])
}else if (filename[2] == 'remove'){
    fs.unlinkSync(filename[3])
}else{
    console.log("Please enter a valid command"); 
}
