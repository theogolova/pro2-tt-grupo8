var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session")
const db = require("./database/models");

const indexRouter = require('./routes/index');
const productoRouter = require("./routes/producto");
const perfilRouter = require("./routes/profile");
const cargarProducto = require("./routes/cargarProducto");




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Configuracion de session */
app.use(session({
  secret: "myapp",
  resave: false,
  saveUninitialized: true
}));

/* pasar info de sess ----> locals */
app.use(function(req,res,next){
  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
  }
  return next()
});

/* configuracion de coockies 
app.use(function(req,res,next){
    if (req.coockies.userId != undefined && req.session.user == undefined) {
      let id = req.coockies.userId; 

      db.user.findByPk(id)
        .then(function (results) {

          req.session.user = result;
          res.locals.user = result;

          return next();
      }).catch(function (err) {
        return console.log(err);
        
      });

    } else {
      return next()
    }
});
*/

app.use('/', indexRouter);
app.use('/cargarproductos', cargarProducto);
app.use("/product", productoRouter);
app.use("/", perfilRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
