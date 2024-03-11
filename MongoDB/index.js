const app = require("./app")
const connectDB = require("./db")

process.loadEnvFile()

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log(`Express err: ${err}`)
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server started at http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(`MongoDB connection err: `, err)
    })

