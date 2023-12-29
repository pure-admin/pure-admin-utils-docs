const Koa = require('koa')
const logger = require('koa-logger')
const router = require('@koa/router')()
const { dateFormat, getCurrentWeek, uuid } = require('@pureadmin/utils')
// https://pure-admin-utils.netlify.app/

const app = new Koa()

// middlewares

app.use(logger())


const helloWorld = ctx => {
  ctx.body = `${dateFormat("YYYY/MM/DD HH:mm")} ${getCurrentWeek()} ${uuid()}`
}

router.get('/', helloWorld)

app.use(router.routes())

app.listen(3000, () => {
  console.log('Server Address: http://localhost:3000 ')
})
