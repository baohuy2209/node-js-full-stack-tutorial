const fs = require('fs')
fs.writeFileSync('hello.txt', 'Hello World') // fs (file system) is a non-global module
console.log("Our directory is " + __dirname) // __dirname is a non-global module
console.log("Our file name is " + __filename) // __filename is a non-global module