import Router  from 'koa-router'

const router = Router()

router.get('/userinfo', async (ctx, next) => {
  await ctx.render('userinfo', {
    title: 'userinfo'
  })
})

export default router