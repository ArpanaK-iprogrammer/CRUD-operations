const express = require('express');
const routes = require("./routes/routes");

const app = express();
app.use(express.json());

const connection = require('./config/dbConnect');

app.get("/",(req,res) => {
    res.send("Welcome to CRUD Operation theory");
})

connection.connect((error) => {
    if(error){
        console.log("Error while connecting to Database",error);
    }else{
        console.log("Connected to database");
    }
})

app.use("/",routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT,() => {
    console.log(`server is running on port number ${PORT}`);
})

