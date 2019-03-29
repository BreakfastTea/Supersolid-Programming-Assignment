const express = require('express');
const bodyParser = require('body-parser');
const submitRoute = require('./lib/routes/submitEntry.route');
const returnRoute = require('./lib/routes/getScores.route');
let cacheHandler = require('./lib/cache/cacheHandler');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname));
app.use('/api', submitRoute);
app.use('/api', returnRoute);

app.get('/', function(req, res) {
	res.render('index.html');
});

cacheHandler.start(function(err) {
    if (err) console.error('ho');
});

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
