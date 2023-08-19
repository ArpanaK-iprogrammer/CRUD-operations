const connection = require('../config/dbConnect');

const insert_service = (storeName, location) => {
    const query = "CALL InsertBookstore(?, ?)";
    const values = [storeName, location];
  
    try {
      connection.query(query, values);
      return "Data inserted successfully";
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("An error occurred while adding the entry.");
    }
  };
  
  module.exports = insert_service;

