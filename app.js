//importing the modules to use
var express  = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');



//intializing the app
var app = express();



//setting up the view engine
app.set('views',path.join(__dirname,'src'));
//app.set('view engine', 'pug');




//body-parser middleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,	'src')));


//our routes
 app.get('/',function(req,res){
     res.render('index');
 });



 app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });