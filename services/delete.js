const connection = require('../config/dbConnect');
const checkStatus = require('./checkStatus');

const deleting = async (store_id) => {
    try {

        await checkStatus(store_id);
        
        const mysql = 'UPDATE Bookstore SET status = ? WHERE store_id = ?';
        const values = ['0', store_id];

        const result = await new Promise((resolve, reject) => {
            connection.query(mysql, values, (err, result) => {
                if (err) {
                    console.error('Database Error:', err);
                    reject('An error occurred while deleting the entry.');
                } else {
                    resolve(result);
                }
            });
        });

        return result.affectedRows;
      
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = deleting;
