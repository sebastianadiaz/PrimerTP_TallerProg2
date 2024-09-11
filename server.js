const http = require('http');
const fs  = require('fs');
const url = require('url');

const servidor = http.createServer((req, res) => {
    const parsedUrl = ur.parse(req.url, true);
    if(req.method == "GET" && parsedUrl.pathname == "/ver-registros" ){
        res.writehead(200, {'Content-Type': 'text/html'});
        res.write("Codigo HTML");
        res.end();
    }

    
    
});

servidor.listen(3000, () =>{
    console.log("corriendo")
});