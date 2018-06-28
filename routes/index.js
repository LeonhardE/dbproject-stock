import userrt from './user'
import stockrt from './stock'
import Router from 'koa-router'

const router = Router()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})


router.use('/user', userrt.routes());
router.use('/stock', stockrt.routes());

export default router
