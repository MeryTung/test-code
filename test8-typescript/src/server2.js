const http =  require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 
     'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
    })
    const proxyRequest = http.request(
        {
        host: '127.0.0.1',
        port: 4000,
        url: '/',
        method: request.method,
        headers: request.headers
        },
        serverResponse => {
            var body = '';
            serverResponse.on('data', chunk => {
                body += chunk
            })
            serverResponse.on('end', () => {
                console.log('This is data,' + body)
                response.end(body)
            })
        }
    ).end()
})


server.listen(3005,()=> { console.log('The proxyServer is running at http://localhost:3005')})
