const connection = require('../config/dbConnect');

const delete_service = (store_id) => {
    const query = "CALL DeleteBookstore(?)";
    const values = [store_id];
  
    try {
      connection.query(query, values);
      return "Data deleted successfully";
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("An error occurred while deleting");
    }
  };
  
  module.exports = delete_service;