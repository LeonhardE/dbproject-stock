import Router  from 'koa-router'

const router = Router()

router.get('/detail', async (ctx, next) => {
    param = ctx.request.query;
    
});

router.get('/search', async (ctx, next) => {
    await ctx.render('searchforStock', {
        title: 'Search!'
    })
});

export default router