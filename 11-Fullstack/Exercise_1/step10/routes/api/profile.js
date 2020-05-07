const express = require('express')
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator')


const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile');
const User = require('../../models/User');


//@route  GET api/profile/me
//@desc   get current user profile
//@access Private

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        })
        if (!profile) {
            return res.status(404).json({
                msg: 'There is no profile for this user'
            })
        }

        //if the profile exist populate user [name , avatar]
        res.json(profile.populate('user', ['name', 'avatar']))

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

//@route  Post api/profile
//@desc   Create or update user profile
//@access Private
router.post('/', [auth, [
    check('status', 'Status is required')
    .not()
    .isEmpty(),
    check('skills', 'Skills is required')
    .not()
    .isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const {
        company,
        location,
        website,
        bio,
        skills,
        status,
        githubusername,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook
    } = req.body;

    //Create Profile fields and Profile object
    const profileFields = {}
    profileFields.user = req.user.id
    if (company) profileFields.company = company
    if (website) profileFields.website = website
    if (location) profileFields.location = location
    if (bio) profileFields.bio = bio
    if (status) profileFields.status = status
    if (githubusername) profileFields.githubusername = githubusername
    if (skills) {
        profileFields.skills = skills.split(',').map(skill => skill.trim())
    }

    // console.log(profileFields.skills)
    // res.send('Hello')

    //Craete social object
    profileFields.social = {}
    if (youtube) profileFields.social.youtube = youtube
    if (twitter) profileFields.social.twitter = twitter
    if (instagram) profileFields.social.instagram = instagram
    if (linkedin) profileFields.social.linkedin = linkedin
    if (facebook) profileFields.social.facebook = facebook

    try {
        //try to find a profile

        let profile = await Profile.findOne({
            user: req.user.id
        })

        //update if it exists
        if (profile) {
            profile = await Profile.findOneAndUpdate({
                user: req.user.id
            }, {
                $set: profileFields
            }, {
                new: true
            })
            return res.json(profile)
        }
        // Create new if not exist
        profile = new Profile(profileFields)

        await profile.save()
        return res.json(profile)

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

})



module.exports = router