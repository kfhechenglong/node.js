const Koa = require('koa');
const app = new Koa()

app.use(async (ctx, next) => {
  const start = new Date()
  console.log(`logger middleware before await`)

  await next()
  console.log(`logger middleware after await`)
  const ms = new Date() -start
  console.log(`${ctx.method} ${ctx.url} --- ${ms}`)
})

app.use(async (ctx) =>{
  console.log(`response middleware`)
  ctx.body = 'Hell Koa'
})

app.listen(3000)