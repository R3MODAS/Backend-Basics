const registerUser = (req,res) => {
    console.log(req.body)
    const {name, email, password} = req.body
    res.json({
        success: true,
        name,
        email,
        password
    })
}

module.exports = registerUser