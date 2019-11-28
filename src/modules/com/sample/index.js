const Router     = require('koa-router');
const sampleCtrl = require('./sample.ctrl');

const sample = new Router();

sample.post('/sampleList',     sampleCtrl.sampleList);
sample.post('/sampleDetail',   sampleCtrl.sampleDetail);
sample.post('/insertSample',   sampleCtrl.insertSample);
//sample.post('/updateSample', sampleCtrl.updateSample);
//sample.post('/deleteSample', sampleCtrl.deleteSample);

module.exports = sample;
