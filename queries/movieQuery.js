const db = require("../db/dbConfig.js");

const getAllMovies = async () => {
  try {
    const allMovies = await db.any("SELECT * FROM MOVIES");
    return allMovies;
  } catch (e) {
    return e;
    console.log(e);
  }
};

module.exports = {
  getAllMovies,
};
