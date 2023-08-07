const sql = require('mssql');

const config = {
    user: 'Nani',
    password: 'Password@2023', 
    server: 'nani.database.windows.net', 
    port: 1433, 
    database: 'Data',
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

async function getdata() {
    try {
        var poolConnection = await sql.connect(config);

        console.log("Reading rows from the Table...");
        var resultSet = await poolConnection.request().query(`select * from display;`);

        console.log(`${resultSet.recordset.length} rows returned.`);
        
        return resultSet;
       
       
    } catch (err) {
        console.error(err.message);
    }
}
async function updatesareecontact(msg){
    try {
        var poolConnection = await sql.connect(config);

        console.log("Reading rows from the Table...");
        var resultSet = await poolConnection.request().query(`update display set Msg = '${msg}' where Subject = 'contactsar';`);
        console.log(resultSet)
        return "Updated";   
    } catch (err) {
        console.error(err.message);
    }

}
async function updatedhoticontact(msg){
    try {
        var poolConnection = await sql.connect(config);

        console.log("Reading rows from the Table...");
        var resultSet = await poolConnection.request().query(`update display set Msg = '${msg}' where Subject = 'contactdho';`);
        console.log(resultSet)
        return "Updated";   
    } catch (err) {
        console.error(err.message);
    }

}
async function updateformalscontact(msg){
    try {
        var poolConnection = await sql.connect(config);

        var resultSet = await poolConnection.request().query(`update display set Msg = '${msg}' where Subject = 'contactfor';`);
        console.log(resultSet)
        return "Updated";   
    } catch (err) {
        console.error(err.message);
    }

}
async function updatesaree(msg){
    try{
        var poolConnection = await sql.connect(config);
        var resultsSet  = await poolConnection.request.query(`update display set Msg = '${msg}' where Subject = 'Saree';`)
        return "Upated"

    }
    catch(err){
        console.log(err);

    }
}


module.exports ={
    updatesareecontact,updateformalscontact,updatedhoticontact,getdata,updatesaree
}