const connection = require('../config/dbConnect');

const update_service = (storeId, newStoreName, newLocation) => {
    const query = "CALL UpdateBookstore(?, ?, ?)";
    const values = [storeId, newStoreName, newLocation];

    try {
        connection.query(query, values);
        return "Data updated successfully";
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("An error occurred while updatin");
    }
  };

module.exports = update_service;