import Router  from 'koa-router'
import userrt from './user'

const router = Router()

router.use('/users', userrt.routes());

export default router