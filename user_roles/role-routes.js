const router = require('express').Router();

const role = require('./role-model');

router.route('/role').post((req, res) => {
    // console.log(req.body);
    const RoleId = req.body.RoleId;
    const userRole = req.body.userRole;

    
            var roleObj = {
                RoleId: RoleId,
                userRole: userRole,
            }

            role.create(roleObj, (err, role) => {
                if (err) {
                    res.json({
                        success: false,
                        message: 'Not Submitted',
                        error: err
                    });
                }

                res.json({
                    success: true,
                    message: "Role added Successfully",
                    result: role
                });

            });
});

module.exports = router;