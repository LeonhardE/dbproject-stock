const mysql = require('mysql');
const sqlroot = require('../config')
export async function getdetail(ctx, next) {
    
    var connection = mysql.createConnection(sqlroot);
    
    connection.connect();
    connection.query('select * from Project.stock where ', [], function (error, results, fields) {
    if (error) throw error;
        console.log('The solution is: ', results[0].name2);
    });
    
    connection.end();
}