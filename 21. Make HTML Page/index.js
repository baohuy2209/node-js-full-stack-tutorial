const express = require("express"); 
const app = express(); 
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const path = require('path'); 
const publicPath = path.join(__dirname, 'public'); 
app.use(connectLivereload());
app.use(express.static(publicPath));
app.listen(5000, () => {
    console.log(`http://localhost:5000`)
});
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(process.cwd(), 'public'));
liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
      liveReloadServer.refresh('/');
    }, 100);
});