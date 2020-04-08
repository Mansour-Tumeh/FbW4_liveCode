const express = require('express')
const router = express.Router()
const members = require('../../Members');

//since we have the /api/members "originalUrl" in index.js, we don't need it here
//Get all Members
router.get('/', (req, res) => {
    res.json(members);
});

//Get a single Member
router.get('/:id', (req, res) => {
    //const found = members.some(member => (member.id === parseInt(req.params.id)))
    const result = members.filter(member => {
        return (member.id === parseInt(req.params.id))
    })
    if (result.length) {
        res.json(result)

    } else {
        res.status(404).json({
            msg: `Member with id ${req.params.id} not found`
        })

    }
});


//Create a memeber
router.post('/', (req, res) => {
    res.send(req.body)
})




module.exports = router