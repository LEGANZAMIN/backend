//require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config({ path: 'src/resources/config/app.env' });


const Koa        = require('koa');
const Router     = require('koa-router');
const bodyParser = require('koa-bodyparser');

//const logger = require('modules/com/logger');


//const api = require('./api');
const com = require('modules/com');

const app    = new Koa();
const router = new Router();


const {
  SERVER_PORT : port = 4000 // 값이 존재하지 않는다면 4000을 기본값으로 사용
} = process.env;         





//router.use('/api',  api.routes());
router.use('/com',  com.routes());


app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());


app.listen(port, () => {
    //logger.info('SFC Server started. PORT : '+port);
});