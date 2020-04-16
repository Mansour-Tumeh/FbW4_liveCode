const express = require('express');
const router = express.Router();
let members = require('../../Members');
const uuid = require('uuid');

//since we have the /api/members "originalUrl" in index.js, we don't need it here
//Get all Members
router.get('/', (req, res) => {
    res.json(members);
});

//Get a single Member
router.get('/:id', (req, res) => {
    //const found = members.some(member => (member.id === parseInt(req.params.id)))
    const result = members.filter((member) => {
        return member.id === parseInt(req.params.id);
    });
    if (result.length) {
        res.json(result);
    } else {
        res.status(404).json({
            msg: `Member with id ${req.params.id} not found`,
        });
    }
});

//Create a memeber
router.post('/', (req, res) => {
    // res.send(req.body)
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active',
    };
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({
            msg: 'Please add name and email',
        });
    }
    members.push(newMember)
    // res.json(members)
    res.redirect('/')
});

//Update Member 
/*Copy get single member :) */
router.put('/:id', (req, res) => {
    const found = members.some(member => (member.id === parseInt(req.params.id)))

    if (found) {
        const updMember = req.body
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name
                member.email = updMember.email ? updMember.email : member.email
                res.json({
                    msg: `Member with id : ${req.params.id} has been updated as below :`,
                    // when we write only member it means member : member
                    member
                })
            }

        })
    } else {
        res.status(404).json({
            msg: `Member with id ${req.params.id} Could not be found`,
        });
    }
});
//Delete Member 
router.delete('/:id', (req, res) => {
    const found = members.some(member => (member.id === parseInt(req.params.id)))
    if (found) {
        members = members.filter(member => (member.id !== parseInt(req.params.id)))
        res.json(
            members
        )
    } else {
        res.status(404).json({
            msg: `Member with id ${req.params.id} Could not be found`,
        });
    }
})

module.exports = router;