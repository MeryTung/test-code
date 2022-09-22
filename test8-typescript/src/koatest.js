// const Koa = require('koa');
// const app = new Koa();

// // response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

// app.listen(3003);

let express = require('express')
let app = express()
app.get('/say', function(req, res) {
  let { username, callback } = req.query
  console.log(req);
  console.log(req.query)
  console.log('username',username) // Iloveyou
  console.log(callback) // show
  res.end(`${callback}('我不爱你')`)
})
app.listen(3000)
