const express = require('express'); 
const app = express();
var favicon = require('serve-favicon')
var path = require('path')
var cookieParser = require('cookie-parser');
var createError = require('http-errors')
require('./settings')
cors = require('cors'),
secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')))

var main = require('./routes/main');
var api = require('./routes/api');
var md = require('./routes/md');

app.set('trust proxy', true);
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(cookieParser());
app.use(express.static("public"))
app.use('/bot', md);
app.use('/', main);

app.use(function (req, res, next) {
	next(createError(404))
  })

app.use(function (err, req, res, next) {
	res.sendFile(__path + '/view/404.html')
  })


app.listen(PORT, () => {
    console.log(`
	██████╗ ███████╗███████╗████████╗ █████╗ ██████╗ ██╗
	██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██║
	██████╔╝█████╗  ███████╗   ██║   ███████║██████╔╝██║
	██╔══██╗██╔══╝  ╚════██║   ██║   ██╔══██║██╔═══╝ ██║
	██║  ██║███████╗███████║   ██║   ██║  ██║██║     ██║
	╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝
			                              Make by Shefin
								 
 Server running on http://localhost:` + PORT)
console.log(`Hello ${creator}`)
})

module.exports = app

