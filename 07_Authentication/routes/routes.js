const { Router } = require("express")
const {getAllUsers, getUser, replaceUser, updateUser, deleteUser} = require("../controllers/user.controllers");
const { createUser } = require("../controllers/auth.controller");
const router = Router()

// Routes
router
  .get('/', getAllUsers)
  .post('/', createUser)
  .get('/:id', getUser)
  .put('/:id', replaceUser)
  .patch('/:id', updateUser)
  .delete('/:id', deleteUser);

module.exports = router