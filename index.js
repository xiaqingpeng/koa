const koa = require("koa");
const app = new koa();
const bodyParser = require("koa-bodyparser");

//使用bodyparser
app.use(bodyParser());

app.use(async ctx => {
  if (ctx.url === "/" && ctx.method === "GET") {
    let html = `
          <h4>登录</h4><hr/>
            <div style="width:200px;height:100px;border:1px solid red">
                <form method='POST' action='/'>
                    <label>用户名: </label>
                    <input placeholder='请输入用户名' name="username"><br/>
                    <label>密码: </label>
                    <input placeholder='请输入密码' name='password' ><br>
                    <button type="submit">提交</button>
                </form>
            </div>
        `;
    ctx.body = html;
  } else if (ctx.url === "/" && ctx.method === "POST") {
    console.log(ctx.request.body);
    let postData = ctx.request.body;
    ctx.body = postData;
  } else {
    ctx.body = `<h1>请求404</h1>`;
  }
});

app.listen(3000, () => {
  console.log("监听端口3000");
});
