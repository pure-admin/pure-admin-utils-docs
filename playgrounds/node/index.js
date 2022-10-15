const Koa = require('koa')
const logger = require('koa-logger')
const router = require('@koa/router')()
const utils = require('@pureadmin/utils')

const app = new Koa()

// middlewares

app.use(logger())

const { getCurrentWeek, buildUUID } = utils

const helloWorld = ctx => {
  ctx.body = getCurrentWeek() + buildUUID()
}

router.get('/', helloWorld)

app.use(router.routes())

app.listen(3000, () => {
  console.log('Server Address: http://localhost:3000 ')
})
