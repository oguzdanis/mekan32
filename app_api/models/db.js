var mongoose = require('mongoose');

var dbURL= 'mongodb://localhost/mekan32';
mongoose.connect(dbURL,{useNewUrlParser:true});

mongoose.connection.on('connected',function(){
	console.log('mongoose'+dbURL+'adresindeki veritabanina baglandi\n')
});

mongoose.connection.on('error',function(err){
	console.log('Mongoose baglanti hatasi'+err)
});

mongoose.connection.on('disconnected',function(){
	console.log('Mongoose baglantisi kesildi\n')
});

kapat=function(msg, callback){
	mongoose.connection.close(function() {
		console.log('Mongoose kapatildi\n'+msg);
		callback();
	});
};

process.on('SIGINT',function(){
	kapat('uygulama kapatildi\n',function(){
		process.exit(0);
	});
});
require('./mekansema');