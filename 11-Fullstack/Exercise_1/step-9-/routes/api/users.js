const express = require('express')
const router = express.Router();
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken');
const {
    check,
    validationResult
} = require('express-validator')

const User = require('../../models/User')

//@route  Post api/users
//@desc   Register user route
//@access Public

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 characters').isLength({
        min: 6
    })
], async (req, res) => {
    // console.log(req.body)
    const errors = validationResult(req)
    //array.isEmpty() : returns true if it is empty array
    //if (!errors.isEmpty()) same like if(errors.Length)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {
        name,
        email,
        password
    } = req.body
    //see if the user exist: try to get user by the email
    try {
        let user = await User.findOne({
            email
        })
        // if the user exist
        if (user) {
            return res.status(400).json({
                errors: [{
                    msg: 'User already exists'
                }]
            })
        }
        //get user gravatar
        const avatar = gravatar.url(email, {
            s: '200', //decide default size
            r: 'pg', //we can't have any naked people or anything
            d: 'mm' //it gives you a default image which is like a user icon
        })


        user = new User({
            name,
            email,
            avatar,
            password
        })
        //Encrypt the password
        const salt = await bcrypt.genSalt(10) //to do the hashing with
        user.password = await bcrypt.hash(password, salt)


        await user.save()

        //Return the jsonwebtoken
        const payload = {
            user: {
                id: user.id //_id : mongoose uses an abstraction  -- no need for the '_'
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 3600000
        }, (error, token) => {
            if (error) throw error
            res.json({
                token
            })
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }


    // res.send('User Route')
})


module.exports = router