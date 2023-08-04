const db = require("../db/dbConfig");

// Create a new user with post request

const createUser = async (data) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (userName, password_hash) VALUES ($1, $2) RETURNING *",
      [data.userName, data.password_hash]
    );
    return newUser;
  } catch (e) {
    return e;
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};

const updateUserById = async (id, review) => {
  let { userName, password_hash } = review;
  try {
    const updated = await db.any(
      `UPDATE users SET userName = $1, password_hash = $2 RETURNING *`,
      [userName, password_hash]
    );
    return updated;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUserById,
};
