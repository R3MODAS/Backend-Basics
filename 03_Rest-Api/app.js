const express = require("express")
const morgan = require("morgan")

const app = express()
const router = require("./routes/routes")

app.use(express.json())
app.use(morgan("tiny"))
// app.use("/", router)
app.use("/api/v1", router)
app.use("/api/v1", router)

module.exports = app