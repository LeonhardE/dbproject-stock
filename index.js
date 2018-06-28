import app from './app';
import { port } from './config';
app.listen(port, () => {
    console.log(`服务端 ${process.env.NODE_ENV} 启动, 监听端口 ${port}`);
});