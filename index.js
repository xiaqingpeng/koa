const koa= require('koa')
const app = new koa()

app.use((ctx)=>{
   
    let  _url =ctx.url
    let  _query =ctx.query
    let  _querystring = ctx.querystring
    console.log(_url,_query,_querystring)
    ctx.body = {
        _url,_query,_querystring
    }
})

app.listen(3000,()=>{
    console.log('监听端口3000')
})