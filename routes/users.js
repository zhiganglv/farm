const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/bar', function (ctx, next) {
  log.debug('ctx',ctx);  
  log.debug('next',ctx);
  ctx.body = JSON.stringify(ctx);
})
module.exports = router
