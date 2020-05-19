const router = require('express').Router();

router.get('/', (req, res) => {
res.status(200).json({ message: 'Connected!' });
});


router.use('/api', require('../user_roles/role-routes'));
router.use('/api', require('../users/users-routes'));

module.exports = router;