const commonDao = require('modules/com/common.dao');

exports.sampleList = async (ctx) => {
    try {
      
        const queryParam = ctx.request.body;
        // Parameter Validation
        
        //const { rows } = await commonDao.selectList("sm_test.selectSampleList", queryParam);
        const { rows } = await commonDao.selectList("test_01.selectTestList_01", queryParam);
        ctx.body       = rows;
 
    } catch (err) {
        ctx.throw(err, 500);
    }
};


exports.sampleDetail = async (ctx) => {
    try {
      

        const queryParam = ctx.request.body;
        // Parameter Validation
        if(queryParam.user_id === undefined){
            ctx.status=400;
            return null;
        }

        const result = await commonDao.selectOne("sm_test.selectSample", queryParam);
        ctx.body       = result;
 
    } catch (err) {
        ctx.throw(err, 500);
    }
};

exports.insertSample = async (ctx) => {
    try {
      
        const queryParam = ctx.request.body;
        // Parameter Validation
        
        const cnt = await commonDao.insert("sm_test.insertSample", queryParam);
        ctx.body  = cnt;
 
    } catch (err) {
        ctx.throw(err, 500);
    }
};
