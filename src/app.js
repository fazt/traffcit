/*eslint no-undef: "error"*/
/*eslint-env node*/
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

import routes from './routes/index';
import userRoutes from './routes/user';
import devRoutes from './routes/dev';

const app = express();
import http from 'http';
const server = http.createServer(app);
const io = require('socket.io')(server);

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

/*
 * Rutas
 * app.use([path],cb); usado para crear middlewares, ademas se puede definir middlewares hacia ciertas rutas
 * app.VERB(path,[cb...],cb); obtiene las variables que express tiene configurado
 * app.route(path).VERB([cb...],cb); usado para definir multiples middlewares a una ruta.
   app.route('/').get(cb).post(cb)
 * app.param([name],cb); establece cierta funcionalidad a las rutas con el 'parametro'. app.param('userId',cb)
 *
 * Request - metodos utiles de peticiones HTTP
 * req.query contiene parametros convertidos a cadena
 * req.params contiene los parametros de la ruta
 * req.body usado para devolver el cuerpo de peticiones, esta propieda es incluida en 'body-parser'
 * req.param(name) devuelve el valor de un parametro, puede ser un query-string,una ruta o un JSON request body
 * req.path,req.host,req.ip la ruta actual de la peticiom,host name, y la ip remota
 * req.cookies en conjunto con cookieParser middleware devuelve las cookies enviadas por el user-agent
 *
 * Responds
 * res.status(code); establece status code HTTP
 * res.set(field,[value]); establece cabeceras HTTP
 * res.cookie(name,value,[options]); establece una cookie
 * res.redirect([status],url); redirecciona una peticion a una url,se puede agregar un statusCode,sino sera 302
 * res.send([body|status],[body]);configura las cabeceras correspondientes para enviar el cuerpo de respuesta
 * res.json([status|body],[body]);fuerza una respuesta JSON, en casos de no enviar un objeto como null o undefined
 * res.render(view,[locals],cb); renderiza una vista y envia una respuesta HTML
*/

/*
 * Request Routing
 * app.route(path).VERB(cb); or app.VERB(path,cb); VERB debe estar en minusculas
*/
app.use(express.static(path.join(__dirname,'public')));

app.use(function(req,res,next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

app.use('/user',userRoutes);
app.use('/',routes);
app.use('/three',devRoutes);

//inicializacion
server.listen(app.get('port'),() => {
  console.log('server on port ', app.get('port'));
  console.log('env: ',env().name);
});

io.on('connection',function(socket){
  console.log('new user');
});


export default app;
