const connection = require('../config/dbConnect')

const reading = async () => {
    try {
        const mysql = 'SELECT * FROM Bookstore WHERE status = ?';
        const values = ['1'];

        const result = await new Promise((resolve, reject) => {
            connection.query(mysql, values, (err, result) => {
                if (err) {
                    console.error('Database Error:', err);
                    reject('An error occurred while retrieving active data.');
                } else {
                    resolve(result);
                }
            });
        });

        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = reading;