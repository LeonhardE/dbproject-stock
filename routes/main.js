import Router  from 'koa-router'

const router = Router()

router.get('/main', async (ctx, next) => {
  await ctx.render('main', {
    title: 'main',
    nameontitle: ctx.request.query.email
  })
  const email = ctx.request.query.email
  const pass = ctx.request.query.pass
})

export default router