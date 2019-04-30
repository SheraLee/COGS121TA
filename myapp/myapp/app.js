//<script src="jquery-3.3.1.min.js"></script>

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var materialRouter = require('./routes/class_material');
var loginRouter = require('./routes/login');
var pageRouter = require('./routes/class_page');
var landingRouter = require('./routes/landing');
var layoutRouter = require('./routes/layout');
var classesRouter = require('./routes/my_classes');
var searchRouter = require('./routes/search_results');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/class_performance', performanceRouter);
app.use('./routes/class_material',materialRouter);
app.use('../routes/login',loginRouter);
app.use('./routes/landing',landingRouter);
app.use('../routes/class_page',pageRouter);
app.use('../routes/layout',layoutRouter);
app.use('./routes/my_classes',classesRouter);
app.use('../routes/search_results',searchRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


/*var morph_api_url = 'https://api.morph.io/chrisguags/ratemyprofessors/data.json';
var morph_api_params = {
  // Keep this key secret!
  key: '7ECe3qkmbUlSNJsGBusV',
  query: 'Richman, Laura'
};

$.ajax({
  url: morph_api_url + '?' + $.param(morph_api_params),

  dataType: 'jsonp',
  success: function(data) {
    console.log('received data: ' + JSON.stringify(data));
  }
	});
*/
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app;


