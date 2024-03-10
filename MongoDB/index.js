const express = require("express")
const mongoose = require("mongoose")

process.loadEnvFile()

mongoose
.connect(process.env.MONGODB_URL)
.then(() => {
    console.log(`Connected to MongoDB successfully`)
})
.catch((err) => {
    console.log(err)
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("User", userSchema)

const addUser = async() => {
    const createdUser = await User.create({
        name: "Ram", age: 35
    })
    console.log(createdUser)
}

const readUser = async() => {
    // const user = await User.find({
    //     name: {$eq: "Remo"}
    // })

    const user = await User.find({
        age: {$gte: 27}
    })
    console.log(user)
}

const updateUser = async() => {
    const id = "65e9ff7c9b36bdb92b2995cb"
    const updatedUser = await User.findByIdAndUpdate(id, {
        name: "Sharadindu Das"
    })
    console.log(updatedUser)
}

const deleteUser = async() => {
    const id = "65e9ff7c9b36bdb92b2995cb"
    const deletedUser = await User.findByIdAndDelete(id)
    console.log(deletedUser)
}

// addUser()
// readUser()
// updateUser()
// deleteUser()