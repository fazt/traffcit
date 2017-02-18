import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import flash from 'connect-flash';
import validator from 'express-validator';
var MongoStore = require('connect-mongo')(session);

import hbsHelpers from './lib/handlebars';
import $config from './lib/config';

import env from './lib/env';

// impor routes
import routes from './routes/index';
import userRoutes from './routes/user';
import api from './routes/api';
import devRoutes from './routes/dev';
import traffic from './routes/traffic-light';

const app = express();
import http from 'http';
const server = http.createServer(app);
const io = require('socket.io')(server);

var sockets = require('./sockets')(io);

mongoose.connect('localhost:27017/traffcity');

require('./config/passport');

/*
 * configuraciones
 * app.set(name,value); 'establece' variables que express toma como configuracion
 * app.get(name); obtiene las variables que express tiene configurado
 * app.engine(ext,cb); define renderizado ejm: app.engine('html',require('ejs').renderFile)
 * app.locals; usado para enviar variables a todas las templates
*/

app.set('x-powered-by',false);
app.set('port',process.env.PORT || $config().serverPort || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine',$config().views.engine);
app.set('socketio', io);

app.engine($config().views.engine,exphbs({
  extname: $config().views.extension,
  defaultLayout: $config().views.layout,
  layoutsDir:path.join(app.get('views'),'layouts'),
  partialsDir:[path.join(app.get('views'),'partials')],
  helpers:hbsHelpers
}));

// if (!$config().html.css.lessPrecompile) {
//   //use less middleware
// }
app.use((req,res,next)=>{
  res.locals.config = $config();
  next();
});

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret:'mysecretword',
  resave:false,
  saveUninitialized:false,
  store: new MongoStore({mongooseConnection: mongoose.connection }),
  cookie: {maxAge: 180 * 60 * 1000}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname,'public')));

app.use(function(req,res,next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

// routes
app.use('/user',userRoutes);
app.use('/api', api);
app.use('/',routes);
app.use('/dev',devRoutes);
app.use('/traffic-light',traffic);
require('./routes/serial')(app, io);
require('./routes/tfc_control')(app, io);

//inicializacion
server.listen(app.get('port'),() => {
  console.log('server on port ', app.get('port'));
  console.log('env: ',env().name);
});

export default app;
