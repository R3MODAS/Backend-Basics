const express = require("express")
const path = require("path")
const router = require("./UserRoutes")

const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api/v1",router)

app.get("/", (req,res) => {
    // console.log(path.join(__dirname + "/index.html"))
    // res.send("Hello")
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.listen(PORT, () => {
    console.log(`Server is Working on http://localhost:${PORT}`);
  });