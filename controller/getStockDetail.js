import mysql from 'mysql';
import sqlconfig from '../config'
import { resolve } from 'path';
export async function getdetail(code) {
    
    var connection = mysql.createConnection(sqlconfig);
    
    connection.connect();
    const detail = await new Promise( () => {
        connection.query('select * from project.stock_data1 where code like `%10%`', [code], function (error, results, fields) {
        if (error) throw error;
            resolve(results);
        });
    });
    connection.end();
    return detail;
}