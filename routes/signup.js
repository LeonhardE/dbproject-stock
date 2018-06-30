import Router from 'koa-router'

const router = Router()

router.get('/signup', async (ctx, next) =>{
    await ctx.render('signup', {
        title: 'signup'
    })
})



export default router;