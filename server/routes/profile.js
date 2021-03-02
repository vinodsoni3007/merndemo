const express = require('express')
const profileRouter = express.Router()
var connection = require('../db');

profileRouter.post('/', async (req, res) => {
    console.log('inside profile api');

    console.log(req.body)

    const profileQuery = {
        username: req.body.userId,
    }

    const result = await userSchema.findOne(profileQuery)

    console.log(result);

    res.send({
        data: result
    })
})

try {
    profileRouter.post('/update', async (req, res) => {
        console.log('inside profile update api');

        const result = await userSchema.findOneAndUpdate({
            username: req.body.username
        },
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                password: req.body.password
            },
            {
                upsert: false,
                new : true
            })
        // console.log(result);

        res.send({
            data: result
        })
    })
}
catch (err) {
    console.error('ERROR : ', err)
}


try {
    profileRouter.get('/studentlist', async (req, res) => {
        console.log('inside student list api');

        const result = await userSchema.find()
        res.json(result)
        
        // Later Change it to returns all the user except from one (From that is being called)

    })
}
catch (err) {
    console.error('ERROR : ', err)
}



module.exports = profileRouter