const router = require('express').Router();

const user = require('./users-model');

router.route('/user').post((req, res) => {
	// console.log(req.body);
	const userId = req.body.userId;
	const userName = req.body.userName;
	const email = req.body.email;
	const phoneNo = req.body.phoneNo;

	user.find({}, function(err, response) {
		if (err) {
			res.json({
				success: false,
				message: 'something wrong!',
				error: err
			});
		}
		if (response.length > 0) {
			const userRole = '2';
			var userObj = {
				userId: userId,
				userName: userName,
				userRole: userRole,
				email: email,
				phoneNo: phoneNo
			};
			user.create(userObj, (err, user) => {
				if (err) {
					res.json({
						success: false,
						message: 'Not Submitted',
						error: err
					});
				}

				res.json({
					success: true,
					message: 'user added Successfully',
					result: user
				});
			});
		} else {
			const userRole = '1';
			var userObj = {
				userId: userId,
				userName: userName,
				userRole: userRole,
				email: email,
				phoneNo: phoneNo
			};
			user.create(userObj, (err, user) => {
				if (err) {
					res.json({
						success: false,
						message: 'Not Submitted',
						error: err
					});
				}

				res.json({
					success: true,
					message: 'user added Successfully',
					result: user
				});
			});
		}
	});
});

module.exports = router;
