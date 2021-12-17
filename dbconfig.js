require("dotenv").config();

const config = {
  authentication: {
    type: "default",
    options: {
      userName: process.env.ADDRESS_BOOK_DB_USER,
      password: process.env.ADDRESS_BOOK_DB_PASSWORD,
    },
  },
  server: "HIVE-PC",
  database: "AddressBook",
  options: {
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
    trustServerCertificate: true,
  },
  port: parseInt(process.env.ADDRESS_BOOK_DB_PORT),
};

module.exports = config;
