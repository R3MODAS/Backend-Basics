const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"))
const users = data.users;

const getAllUsers = (req, res) => {
    res.json(users)
}

const getUser = (req, res) => {
    const id = +req.params.id
    const user = users.find((p) => p.id === id)
    if (!user) {
        res.status(404).json({
            success: false,
            message: "user not Found"
        })
    }
    res.json({
        success: true,
        user
    })
}

const createUser = (req, res) => {
    const newuser = req.body
    if (!newuser) {
        res.status(404).json({
            success: false,
            message: "Cannot create user"
        })
    }
    users.push(newuser)
    res.status(201).json({
        success: true,
        newuser
    })
}

const updateUserEverything = (req, res) => {
    const id = +req.params.id
    const userIndex = users.findIndex(p => p.id === id)
    users.splice(userIndex, 1, { id: id, ...req.body })
    res.json(users)
}

const updateUser = (req, res) => {
    const id = +req.params.id
    const userIndex = users.findIndex(p => p.id === id)
    const user = users[userIndex]
    users.splice(userIndex, 1, { ...user, ...req.body })
    res.json(users)
}

const deleteUser = (req, res) => {
    const id = +req.params.id
    const userIndex = users.findIndex(p => p.id === id)
    const deleteduser = users.splice(userIndex, 1)
    res.json(deleteduser)
}

module.exports = { getAllUsers, getUser, createUser, updateUser, updateUserEverything, deleteUser }