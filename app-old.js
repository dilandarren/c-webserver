import http from 'http';

http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type' : 'application/json' })
    

    res.write('Hola Mundo :D');
    res.end();
})

.listen( 8080 );

console.log('escuchando el puerto', 8080);