const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB server is connected to : ${connectionInstance.connection.host}`)
    } catch (err) {
        console.log(`MongoDB server connection err: ${err}`)
        process.exit(1)
    }
}

module.exports = connectDB