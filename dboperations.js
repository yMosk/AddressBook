var config = require("./dbconfig");
console.log(config);

const sql = require("mssql");

async function getAddresses() {
  try {
    let pool = await sql.connect(config);
    let addresses = await pool
      .request()
      .query("SELECT * FROM [dbo].[Addresses]");
    return addresses.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getAddress(id) {
  try {
    let pool = await sql.connect(config);
    let address = await pool
      .request()
      .input("input_id", sql.Int, id)
      .query("SELECT * FROM [dbo].[Addresses] WHERE [Id] = @input_id");
    return address.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addAddress(address) {
  try {
    let pool = await sql.connect(config);
    let insertAddress = await pool
      .request()
      .input("Id", sql.Int, address.Id)
      .input("Name", sql.NVarChar, address.Name)
      .input("Email", sql.NVarChar, address.Email)
      .input("Phone", sql.Int, address.Phone)
      .execute("[dbo].[InsertAddress]");
    return insertAddress.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function editAddress(address) {
  try {
    let pool = await sql.connect(config);
    let editAddress = await pool
      .request()
      .input("Id", sql.Int, address.Id)
      .input("Name", sql.NVarChar, address.Name)
      .input("Email", sql.NVarChar, address.Email)
      .input("Phone", sql.Int, address.Phone)
      .execute("[dbo].[UpdateAddress]");
    return editAddress.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function deleteAddress(id) {
  try {
    let pool = await sql.connect(config);
    let address = await pool
      .request()
      .input("input_id", sql.Int, id)
      .query("DELETE FROM [dbo].[Addresses] WHERE [Id] = @input_id");
    return address.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAddresses: getAddresses,
  getAddress: getAddress,
  addAddress: addAddress,
  editAddress: editAddress,
  deleteAddress: deleteAddress,
};
