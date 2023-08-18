const connection = require('../config/dbConnect');
const userSchema = require('../model/schema');

const update = async (store_id, storeName, location) => {
    try {
        const { error, value } = userSchema.validate({ 
            storeName: storeName,
            location: location 
        });

        if (error) {
            throw new Error(error.details[0].message);
        }

        const mysql = 'UPDATE Bookstore SET storeName = ?, location = ? WHERE store_id = ?';
        const values = [value.storeName, JSON.stringify(value.location), store_id];

        const result = await new Promise((resolve, reject) => {
            connection.query(mysql, values, (err, result) => {
                if (err) {
                    console.error('Database Error:', err);
                    reject('An error occurred while updating the entry.');
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

module.exports = update;
