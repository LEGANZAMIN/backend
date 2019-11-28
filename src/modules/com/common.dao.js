const pool          = require('modules/com/connection.pool');
const mybatisMapper = require('mybatis-mapper');

const logger = require('modules/com/logger');

const mapper          = require('resources/sql/mapper');
mybatisMapper.createMapper(mapper);

/*
* Connection
*/
async function getConnection() {
  const client   = await pool.getConnection();
  return client;
};

/*
* NAMESPACE, SQL_ID
*/
function getQueryInfo(queryString){
    let idx= queryString.indexOf(".");

    let objQueryInfo = new Object();
    objQueryInfo.NAMESPACE = queryString.substring(0, idx);
    objQueryInfo.SQL_ID    = queryString.substring(idx+1, queryString.length);

    return objQueryInfo
}

exports.selectList = async ( queryInfo, queryParam ) => {
    try {
        
        const { NAMESPACE, SQL_ID } = getQueryInfo(queryInfo);

        const pStmt  = mybatisMapper.getStatement(NAMESPACE, SQL_ID, queryParam);
        logger.debug(queryInfo);
        logger.debug(JSON.stringify(queryParam));
        logger.debug(pStmt);

        
        const client   = await getConnection();
        const result   = await client.query(pStmt);
        return result;

 
    } catch (err) {
        throw err
    }
};

exports.selectOne = async ( queryInfo, queryParam ) => {
    try {
        
        const { NAMESPACE, SQL_ID } = getQueryInfo(queryInfo);

        const pStmt  = mybatisMapper.getStatement(NAMESPACE, SQL_ID, queryParam);
        logger.debug(queryInfo);
        logger.debug(JSON.stringify(queryParam));
        logger.debug(pStmt);
        
        const client   = await getConnection();
        const result   = await client.query(pStmt);
        return result.rows[0];
        
    } catch (err) {
        throw err
    }
};

exports.insert = async ( queryInfo, queryParam ) => {
    try {
        
        const { NAMESPACE, SQL_ID } = getQueryInfo(queryInfo);

        const pStmt  = mybatisMapper.getStatement(NAMESPACE, SQL_ID, queryParam);
        logger.debug(queryInfo);
        logger.debug(JSON.stringify(queryParam));
        logger.debug(pStmt);
        
        const client   = await getConnection();
        const result   = await client.query(pStmt);
        return result.rowCount;
 
    } catch (err) {
        throw err
    }
};

