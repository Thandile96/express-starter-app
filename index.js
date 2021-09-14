const express = require('express');
const exphbs  = require('express-handlebars');
const pizzaPerfect = require('./pizzasFactory');
const bodyParser = require('body-parser');

const app = express();
const PizzaPerfect = pizzaPerfect()
const PORT =  process.env.PORT || 3017;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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
		totalSmall: PizzaPerfect.smallTotal(),
		totalMedium: PizzaPerfect.mediumTotal(),
		totalLarge: PizzaPerfect.largeTotal(),
		totalGrand: PizzaPerfect.grandPizza(),

		counterSmall: PizzaPerfect.counterForSmall(),
		counterMedium: PizzaPerfect.counuterForMedium(),
		counterLarge: PizzaPerfect.counterForLarge()
		
	});
	// console.log(PizzaPerfect.smallTotal())
});


app.post('/smallPizza', function(req, res) {
	//console.log(req.body.small);
	var smallSize = req.body.small
	PizzaPerfect.buySmallPizza(smallSize)
    res.redirect('/')
});

app.post('/mediumPizza', function(req, res) {
	var mediumSize = req.body.medium
	PizzaPerfect.buyMediumPizza(mediumSize)
	res.redirect('/')
	
});
	

app.post('/largePizza', function(req, res) {
	var largeSize = req.body.large
	PizzaPerfect.buyLargePizza(largeSize)
	res.redirect('/')
});

app.get('/getsmall', function(req, res) {
	var smallPizzaTotal = PizzaPerfect.smallTotal()
	res.render('index', {
		smallPizzaTotal
	});
});

app.get('/getmeduim', function(req, res) {
	var mediumPizzaTotal = PizzaPerfect.mediumTotal()
	res.render('index', {
		mediumPizzaTotal
	});
});

app.get('/getlarge', function(req, res) {
	var largePizzaTotal = PizzaPerfect.largeTotal()
	res.render('index', {
		largePizzaTotal
	});
});


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});