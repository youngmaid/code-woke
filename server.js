//NPM CREW ON DECK
const express = require('express'); // INITIALIZE EXPRESS
const bodyParser = require('body-parser'); // BODY-PARSER ON DECK
const path = require('path'); // PATH ON DECK
const logger = require('morgan'); // MORGAN ON DECK
require('dotenv').config(); //FOR ENV FILES
const methodOverride = require('method-override'); // METHOD OVERRIDE ON DECK

// LINK UP THE ROUTES
const orgsRoutes = require('./routes/org-routes.js')

// INITIALIZE EXPRESS APP
const app = express();

// SET UP PORT!
const PORT = process.env.PORT || 3000;

// SET UP VIEW TEMPLATES
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// HOOK UP MIDDLEWARES & LOGGING
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


//LINK ROUTE APP
app.use('/orgs', orgsRoutes);


// FOR STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// SET UP INDEX ROUTES
app.get('/', (req, res) => {
  res.render('index', {
    message: '',
  });
});

app.post('/org-info', function (req, res) {
  console.log("inside org-info post route ", req.body);
  res.json({"message":"yes"})
});

// not sure why having this route will override the post above
// app.get('/org-info', function (req, res) {
//   console.log("inside org-info get oute ", req.body);
//   res.json({"message":"getRoute"})
// });

app.post('/data', function (req, res) {
  console.log(req.body);
})

//ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

// INITIALIZE LISTENER ON PORT AND GET IT POPPIN!
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});

// EXPORT THE APP
module.exports = app;





