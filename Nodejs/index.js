//! Modules
const fs = require("fs")
const path = require("path")
const os = require("os")
const http = require("http")

//! Reading File
// const file = fs.readFileSync("file.txt", "utf-8")
// console.log(file)

// fs.readFile("file.txt", "utf-8", (err,data) => {
//     if(err) throw new Error(err)
//     console.log(data)
// })

//! Creating and Updating File
// fs.writeFile("hello.txt", "This is a new file", "utf-8", (err,data) => {
//     if(err) throw new Error(err)
// })

//! Deleting File
// fs.unlink("hello.txt", (err) => {
//     if(err) throw new Error(err)
//     console.log("Deleted Successfully!")
// }) 

//! Path module 
// console.log(path.resolve())
// console.log(path.dirname("D:/CODING/Nodejs"))

//! OS module
// console.log(os.totalmem())
// console.log(os.freemem())

//! Http module
http.createServer((req,res) => {
    // res.end("Hello")
    if(req.url === "/"){
        res.end("<h1>Home Page</h1>")
    }
    else if(req.url === "/about"){
        res.end("<h1>About Page</h1>")
    }
    else if(req.url === "/contact"){
        res.end("<h1>Contact Page</h1>")
    }
    else if(req.url === "/service"){
        res.end("<h1>Service Page</h1>")
    }
    else{
        res.end("<h1>404 Page not Found</h1>")
    }


}).listen(3000, () => console.log(`Server started at http://localhost:3000`))