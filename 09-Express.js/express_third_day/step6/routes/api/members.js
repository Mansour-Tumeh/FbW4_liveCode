const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

//since we have api/members/ in the index.js we don't need it here :
//Get all Members
router.get('/', (req, res) => res.json(members));

//Get single member

router.get('/:id', (req, res) => {
    const found = members.some((member) => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter((member) => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({
            msg: `Member with id:${req.params.id} cannot be found`,
        });
    }
});

//Create a member
router.post('/', (req, res) => {
    //   res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active',
    };
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({
            msg: 'Please include a name and email'
        });
    }

    members.push(newMember);
    res.json(members);
});

//Update Member
/*Copy get single member :) */
router.put('/:id', (req, res) => {
    const found = members.some((member) => member.id === parseInt(req.params.id));
    if (found) {
        const updMember = req.body
        members.forEach(member => {

            /*the problem is they may update just the name or email, so we need to make sure
            that only when update has value else keep the originale :) */
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({
                    msg: `Member with id :${member.id} was updated as below : `,
                    member
                })
            }
        })
    } else {
        res.status(400).json({
            msg: `Member with id:${req.params.id} cannot be found`,
        });
    }
});

// Delete Member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({
            msg: 'Member deleted',
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({
            msg: `No member with the id of ${req.params.id}`
        });
    }
});

//urlencoded true : post array of users in an extended option


module.exports = router;