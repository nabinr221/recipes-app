const Users = require('../modals/Users')
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    try {
        const hash = await bcrypt.hashSync(req.body.password, 10);
        const user = await Users.findOne({ email: req.body.email })
        if (!user) {
            req.body.password = hash
            const userData = Users.create(req.body);
            if (userData) {
                res.status(200).json({ msg: "user is added",isRegister:true });
            } else {
                res.json({ msg: "something went worng" });
            }
        } else {
            res.status(409).json({ msg: "user already exists" });
        }

    } catch (err) {
        console.log(err);
    }
}

const login = async (req, res) => {
    const user = await Users.findOne({ email: req.body.email }).lean()
    if (user) {
        try {
            const { email, password } = user;
            const isMatched = bcrypt.compareSync(req.body.password, password)
            if (email && isMatched) {
                const { password, ...refactoredUserObj } = user
                res.status(200).json({
                    msg: "logged in successfully",
                    isLogin: true,
                    userData: refactoredUserObj
                })
            }
            else {
                res.status(401).json({
                    msg: "Invalid Email and Password"
                })
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    else {
        res.json({
            msg: "User doesn't exist"
        })
    }

}
const getUsers = async (req, res) => {
    try {
        const usersData = await Users.find()
        if (usersData) {
            res.status(200).json({
                usersData
            })
        } else {
            res.status(500).json({
                msg: 'Something Went Wrong'
            })
        }
    } catch (err) {
        console.log(err)
    }
}

const getUserDetails = async (req, res) => {
    try {

        const userDetails = await Users.findById(req.params.id)
        if (userDetails) {
            res.status(200).json({
                userDetails
            })
        } else {
            res.status(500).json({
                msg: "Something went wrong"
            })
        }

    } catch (err) {
        console.log(err)
    }

}

const deleteUser = async (req, res) => {
    try {
        const usersData = await Users.findByIdAndDelete(req.body._id)
        if (usersData) {
            res.status(204).json({ msg: 'User Deleted Successfully' })
        } else {
            res.status(409).json({ msg: "Something went wrong !!!" })
        }
    } catch (err) {
        console.log(err);
    }
}


exports.login = login
exports.register = register
exports.getUsers = getUsers
exports.deleteUser = deleteUser
exports.getUserDetails = getUserDetails