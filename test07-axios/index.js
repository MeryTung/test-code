// 1.导入 http 模块。
const http = require('http');

// 2.创建 web 服务器实例。
const server = http.createServer();

// 3.为服务器实例绑定 request 事件，监听客户端请求。
server.on('request', function(req, res) {
    // req.url 是客户端请求的 URL地址
    const url = req.url;
    // req.method 是客户端请求的 method 类型
    const method = req.method;
    const str = `Your request url is ${url},and request url is ${method},哈哈哈哈`;
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(`${str}`)
    console.log(req);
});

// 4.启动服务器
server.listen(8080, function() {
    console.log('server runing at http://127.0.0.1:8080');
});