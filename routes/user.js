const router = require('koa-router')()



router.get('/register', async (ctx, next) =>{
    ctx.body = 'res';
    console.log(ctx);
}).post('/register', async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
});




module.exports = router;