const connection = require("../config/dbConnect");
const userSchema = require("../model/schema");

const insert = async (storeName, location) => {
  try {
    const { error, value } = userSchema.validate({
      storeName: storeName,
      location: location,
    });

    if (error) {
      throw new Error(error.details[0].message);
    }

    const mysql = "INSERT INTO Bookstore (storeName, location) VALUES (?, ?)";
    const values = [value.storeName, JSON.stringify(value.location)];
    
    console.log("Insert values ",values)

    const result = await new Promise((resolve, reject) => {
      connection.query(mysql, values, (err, result) => {
        if (err) {
          console.error("Database Error:", err);
          return reject("An error occurred while adding the entry.");
        }
        resolve(result);
      });
    });

    return result.insertId;

  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = insert;
