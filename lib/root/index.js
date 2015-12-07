var router = require('express').Router({ mergeParams: true });
module.exports = router;


router.get('/', function(req, res) {
	var locals = {
		Config: require('config')
	}

	return res.render(__dirname + '/views/root', locals);
});