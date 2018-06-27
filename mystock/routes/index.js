const userrt = require('./user');
const stockrt = require('./stock');
const router = require('koa-router')();
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})


router.use('/user', userrt.routes());
router.use('/stock', stockrt.routes());

module.exports = router
