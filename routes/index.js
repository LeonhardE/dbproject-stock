import userrt from './user'
import stockrt from './stock'
import signuprt from './signup'
import mainrt from './main'
import userinfort from './userinfo'
import Router from 'koa-router'

const router = Router()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.use('/userinfo', userinfort.routes());
router.use('/main', mainrt.routes());
router.use('/signup', signuprt.routes());
router.use('/user', userrt.routes());
router.use('/stock', stockrt.routes());

export default router
