import Router from 'koa-router'
import { StockofUser } from "../controller/user"

const router = Router()

router.use(async ()=>{
    
})

router.get('/prefer', async (ctx, next) => {
    const { email : email } = ctx.request.query;
    ctx.body = await StockofUser(email);
});

export default router;