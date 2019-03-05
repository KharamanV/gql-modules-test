import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';


const Application = new Koa();

export default Application.use(cors({ origin: '*' })).use(bodyParser());
