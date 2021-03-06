const express = require('express');
const MongoClient = require('mongoose');
const passport = require('passport');

// Load User Model
require('./models/User');

//Passport Configuration
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');

//Load Keys
const keys = require('./config/keys');

// //Map global promise
// mongoose.Promise = global.Promise;

//Mongoose Connect
MongoClient.connect(
	keys.mongoURI,
	{ useNewUrlParser: true }
)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

const app = express();

app.get('/', (req, res) => {
	res.send('It works!');
});

// Use Routes

app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
