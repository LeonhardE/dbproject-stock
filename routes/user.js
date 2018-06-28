import Router from 'koa-router'

const router = Router()

router.get('/register', async (ctx, next) =>{
    ctx.body = 'res';
    console.log(ctx);
}).post('/register', async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
});



export default router;