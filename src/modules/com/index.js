const Router = require('koa-router');
const sample = require('./sample');


const sampleRouter = new Router();

sampleRouter.use('/sample', sample.routes());



module.exports= sampleRouter;