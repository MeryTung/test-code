const express = require('express');
const app = express();

let whiteList = ['http://127.0.0.1:5500']
app.use(function(req, res, next) {
    let origin = req.headers.origin;
    console.log('origin',origin)
    if(whiteList.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Allow-Headers', 'username');
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Max-Age',6);
        // res.setHeader('Access-Control-Expose-Headers','username')
    }
    if(req.method === 'OPTIONS'){
        res.end()
    }
    next()
})

// app.put('/getData',function(req,res){
//     console.log(req.headers);
//     res.setHeader('username','yuanyuan');
//     res.end('Mark')
// })

// app.get('/getData',function(req,res){
//    console.log(res.headers);
//    res.end('Zhao')
// })


// app.listen(4000)


//websocket

// const WebSocket = require('ws');
// let wss = new WebSocket.Server({port:4001,encoding: 'utf8'})
// wss.on('connection',function(ws){
//     ws.on('message',function message(data){
//         ws.setEncoding('utf8')
//        // console.log(data)
//          console.log(`received: %s`,data)
//         ws.send('Mark Chao')
//     })
   
// }
//     )

    // app.listen(4000)
    app.post('/files',function(res,res){

        res.send({
            msg:'文件上传成功',
            code: 0
        })
    })
    app.listen(3008)