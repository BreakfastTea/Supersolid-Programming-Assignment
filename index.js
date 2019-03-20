const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const submitRoute = require('./ng/routes/submitEntry.route');
const Submitted = require('./ng/models/submitted.model')

const app = express();

//mongo connection setup
let scoresDbUrl = 'mongodb+srv://root:challengesolid@scores-lyqky.mongodb.net/test?retryWrites=true';
const mongoDb = scoresDbUrl;
mongoose.connect(mongoDb, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to DB: '));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname));
app.use('/api', submitRoute);

app.get('/', function(req, res) {
	res.render('index.html');
});

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
