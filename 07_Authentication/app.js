const express = require("express")
const cors = require("cors")
const jwt = require('jsonwebtoken')
const router = require("./routes/routes")
const app = express()

const auth = (req, res, next) => {
    try {
        const token = req.get("Authorization").split("Bearer ")[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        if (decoded.password) {
            next()
        }
        else {
            res.sendStatus(401)
        }
    } catch (err) {
        res.sendStatus(401)
    }
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use("/users", auth, router)

module.exports = app
