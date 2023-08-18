const connection = require("../config/dbConnect");

const checkStatus = async (store_id) => {
  try {
    const selectQuery = "SELECT status FROM Bookstore WHERE store_id = ?";

    connection.query(selectQuery, [store_id], (err, selectResults) => {
      if (err) {
        console.log("Database Error:", err);
      }else {
          const currentStatus = selectResults[0].status;
          if (currentStatus === 0) {
            throw new Error("Status is already 0, unable to delete.");
          }
        }
    });
  } catch (error) {
    // throw new Error(error);
    return error
  }
};

module.exports = checkStatus;
