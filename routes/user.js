import Router from 'koa-router'
import { registerUser, userlogin, StockofUser } from "../controller/user"

const router = Router()

router.post('/register', registerUser);

router.post('/login', userlogin);

router.get('/prefer', async (ctx, next) => {
    const { email : email } = ctx.request.query;
    ctx.body = await StockofUser(email);
});

export default router;