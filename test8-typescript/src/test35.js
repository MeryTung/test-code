const koa = require('koa');
const app = new koa();

app.use(async (ctx,next) => {
    console.log('第一层开始')
    await next();
    console.log(ctx)
    console.log('第一层结束')
})

app.use(async (ctx,next) => {
    console.log('第二层开始');
    await next();
    console.log('第二层结束')
})

app.listen(3000)