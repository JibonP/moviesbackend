const express = require("express");
const user = express.Router();
const { createUser, getAllUsers, updateUserById } = require("../queries/users");

/// create user
user.post("/", async (req, res) => {
  const createdUser = await createUser(req.body);

  res.json(createdUser);
});
// get user
user.get("/", async (req, res) => {
  const allUsers = await getAllUsers();

  if (allUsers.length === 0) {
    res.status(404).json({ error: "No users found" });
  } else {
    res.status(200).json(allUsers);
  }
});

// UPDATE user
user.put("/:id", async (req, res) => {
  const userUpdated = await updateUserById(req.params.id, req.body);

  if (userUpdated.length === 0) {
    return res.status(404).json({ error: "User not found" });
  } else {
    return res.json(userUpdated);
  }
});

module.exports = user;
