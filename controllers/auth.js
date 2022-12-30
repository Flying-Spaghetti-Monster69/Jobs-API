

const register = async (req,res)  =>{
    res.send('register user')
}

const login = async (req,res)  =>{
    res.send('loign user')
}

module.exports = {
    register,
    login
}