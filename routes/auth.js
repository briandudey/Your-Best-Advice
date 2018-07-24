const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
	'/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
	'/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res) => {
		//Successful Authentication, redirect to dashboard.
		res.redirect('/dashboard');
	}
);

module.exports = router;
