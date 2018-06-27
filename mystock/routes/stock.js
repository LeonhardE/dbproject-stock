const router = require('koa-router')()


module.exports = router;

router.get('/detail', async (ctx, next) => {
    param = ctx.request.query;
    
});

router.get('/search', async (ctx, next) => {
    await ctx.render('searchforStock', {
        title: 'Search!'
    })
});