const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('index', {
	});
});

var totalSmall = 0;
app.post('/smallPizza', function(req, res) {
	let size = req.body.small 
	if(size === "small"){
	  totalSmall += 31.99;
	}
  res.redirect('/')
});

var totalMedium = 0
app.post('/mediumPizza', function(req, res) {
  let size = req.body.medium 
  if(size === "medium"){
	totalMedium += 76.99;
  }
	res.redirect('/')
});

var totalLarge = 0;
app.post('/largePizza', function(req, res) {
	let size = req.body.large 
	if(size === "large"){
	  totalLarge += 98.99;
	}
  
	res.redirect('/')
});

app.get('/getsmall', function(req, res) {
	res.render('index', {
		totalSmall
	});
});

app.get('/getmeduim', function(req, res) {
	res.render('index', {
		totalMedium
	});
});

app.get('/getlarge', function(req, res) {
	res.render('index', {
		totalLarge
	});
});


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});