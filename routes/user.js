import Router from 'koa-router'
import { registerUser, userlogin } from "../controller/user"

const router = Router()

router.post('/register', async (ctx, next) => {
    const { username : username, email : email, passwd : passwd} = ctx.request.body;
    ctx.body = await registerUser(username, email, passwd);
});

router.post('/login', async (ctx, next) => {
    const { email : email, passwd : passwd} = ctx.request.body;
    ctx.body = await userlogin(email, passwd);
});


export default router;