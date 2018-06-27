const mysql = require('mysql');

export async function getdetail(ctx, next) {
    
    var connection = mysql.createConnection({
        host     : '39.108.223.141',
        user     : 'root',
        password : '123456',
    });
    
    connection.connect();
    connection.query('select * from Project.stock where ', [], function (error, results, fields) {
    if (error) throw error;
        console.log('The solution is: ', results[0].name2);
    });
    
    connection.end();
}