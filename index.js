const express = require('express');
const bodyParser = require('body-parser');
const submitRoute = require('./lib/routes/submitEntry.route');
const returnRoute = require('./lib/routes/getScores.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname));
app.use('/api', submitRoute);
app.use('/api', returnRoute);

app.get('/', function(req, res) {
	res.render('index.html');
});

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
