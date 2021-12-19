require("dotenv").config();

module.exports={
    db_user: process.env.DB_USER, 
    db_name: process.env.DB_NAME, 
    db_port: process.env.DB_PORT,
    db_pass: process.env.DB_PASS,
    db_host: process.env.DB_HOST,
    host: process.env.HOST,
    PORT: process.env.PORT, 
}