const koa= require('koa')
const app = new koa()

app.use((ctx)=>{
   
    let  _url =ctx.url
    let  _query =ctx.query
    let  _querystring = ctx.querystring
  /*   ctx.query 返回解析过的对象
    ctx.querystring 返回未解析的字符串 */

    console.log(_url,_query,_querystring)
    ctx.body = {
        _url,_query,_querystring
    }
})

app.listen(3000,()=>{
    console.log('监听端口3000')
})