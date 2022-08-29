var express = require('express');
var router = express.Router();
const { runtime, getJson } = require('../lib')
__path = process.cwd()

router.get('/statistic', async (req, res, next) => {

	let hits = await getJson('https://api.countapi.xyz/hit/rest-api-alip.herokuapp.com/visitor')

	res.json({
	status: true,
	creator: `${creator}`,
	runtime: runtime(process.uptime()),
	visitor: hits.value,

	})

})

router.get('/', (req, res) => {
    res.sendFile(__path + '/view/home.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/view/docs.html')
})

module.exports = router
