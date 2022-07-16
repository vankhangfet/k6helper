const app = require('./app');
const http = require('http');

const port = process.env.port || '3000';
app.set('port',port);

const server = http.createServer(app);


server.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Server app listening at http://%s:%s", host, port)
 })
