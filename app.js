require('colors');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');

var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news'); //Import routes for "News" area of site
var categoryRouter = require('./routes/categories'); //Import routes for "categories" area of site

const Config = require('./config')
const dbConnection = require('./init'); //include db connection file

var app = express();
var server = http.createServer(app);
var listen = () => server.listen(Config.port, () => console.log(`Server listening on port ${Config.port}`.green));

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.log('Specified port unavailable, retrying in 10 seconds...'.red);
        setTimeout(() => {
            server.close();
            server.listen(Config.port);
        }, Config.retryAfter);
    }
});

listen();

dbConnection(); // make db connection 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/news', newsRouter); // Add News routes to middleware chain.
app.use('/category',categoryRouter) // Add Categories routes to middleware chain.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send('<h1> Requested page not found !</h1>');
  // next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
