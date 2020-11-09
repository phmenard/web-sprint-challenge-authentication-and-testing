const router = require('express').Router();
const users = require("./users-model")

router.post('/register',  async (req, res, next) => {
	try {	
		const user = await users.create(req.body)
		res.status(201).json(user)
	} catch (error) {
		next(error)
	}
})

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
