const express = require('express');
const router = express.Router()
const members = require('../../Members');


//since we have api/members/ in the index.js we don't need it here :
//Get all Members
router.get('/', (req, res) => res.json(members));

//Get single member

router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({
            msg: `Member with id:${req.params.id} cannot be found`
        })
    }

})





module.exports = router