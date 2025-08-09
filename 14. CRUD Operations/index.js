const path = require('path');
const fs = require('fs'); 
const https = require('https');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/Hello.txt`;
fs.writeFileSync(filePath, "Hello Nguyen Bao Huy");
fs.readFile(filePath, 'utf-8', (err,data) => {
    if (err) throw Error(err); 
    console.log(data); 
}); 
fs.appendFile(filePath, 'CodeXam', (err) => {
    if(!err){
        console.log('The "data to append" was appended to file!');
    }
})
fs.rename(filePath, `${dirPath}/rename.txt`, (err) => {
    if (err) throw err;
     console.log('Rename complete!');
     }
);
fs.unlinkSync(`${dirPath}/rename.txt`);
const url = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsample&psig=AOvVaw0kKeTYdIJQUtUHAqVqNpZD&ust=1754809653818000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjkxMKV_Y4DFQAAAAAdAAAAABAE';
const file = fs.createWriteStream('image.jpg');
https.get(url, (response) => {
    response.pipe(file);
});