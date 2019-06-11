const express       = require('express'),
      bodyParser    = require('body-parser'),
      path          = require('path'),
      cors          = require('cors'),
      mongoose      = require('mongoose'),
      // routes        = require('../routes/index.route')
      db            = require('./config/database'),
      app           = express(),
      port          = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect(db.url, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

var allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];
// routing
var distDir = '../public/';
console.log(path.join(__dirname + distDir));
// Point static path to dist
app.use(express.static(path.join(__dirname + distDir)));

// Catch all other routes/requests
app.get('/*', (req, res) => {
    if (allowedExt.filter(function (ext) { return req.url.indexOf(ext) > 0; }).length > 0) {
        res.sendFile(path.join(__dirname, distDir + req.url));
    }
    else {
        res.sendFile(path.join(__dirname, distDir + '/index.html'));
    }
});

var originsWhitelist = [
  'http://localhost:3000',      //this is my front-end url for development
   // 'http://www.myproductionurl.com'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}

// enable CORS - Cross Origin Resource Sharing
// app.use(cors(corsOptions));

//CORS Middleware
app.use(cors());
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

// API router
// app.use('/api/', routes);
require('./routes')(app);

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//     const err = new httpError(404)
//     return next(err);
// });

app.listen(port, (err) => {
    console.log('Server listening on ', port);
});
