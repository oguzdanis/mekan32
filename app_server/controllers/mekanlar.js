var express = require('express');
var router = express.Router();
const anaSayfa=function(req,res,next){
	res.render('mekanlar-liste',
	{
		'baslik':'AnaSayfa',
		'sayfaBaslik':{
			'siteAd':'Mekan32',
			'aciklama':'Isparta civarindaki mekanlari kesfedin'
		},
		'mekanlar':[
		{
			'ad':'Starbucks',
			'adres':'Centrum Garden',
			'puan':'5',
			'imkanlar':['kahve','cay','pasta'],
			'mesafe':'1km'
		},
		{
			'ad':'Gloria Jeans',
			'adres':'Iyas',
			'puan':'4',
			'imkanlar':['baklava','cay','pasta'],
			'mesafe':'10km'
		}
			]
		}
	);
}
	


const mekanBilgisi = function(req, res) {
  res.render("mekan-detay", {
   'baslik': "Mekan Bilgisi",
   'sayfaBaslik':'Starbucks',
   'mekanBilgisi':{
   	'ad':'Starbucks',
   	'adres':'Centrum Garden',
   	'puan':5,
   	'imkanlar':['Kahve','Pasta','Kek'],
   	'kordinatlar':{
   		'enlem':37.781406,
   		'boylam':30.565119
   	},
   	'saatler':[
   		{
   			'gunler':'Pazartesi-Cuma',
   			'acilis':'7:00',
   			'kapanis':'23:00',
   			'kapali':false
   		},
   		{
   			'gunler':'Cumartesi',
   			'acilis':'9:00',
   			'kapanis':'22.30',
   			'kapali':false
   		},
   		{
   			'gunler':'Pazar',
   			'kapali':true
   		}
   	],
   	'yorumlar':[
   		{
   			'yorumYapan':'Mehmet Oğuz Danıs',
   			'puan':4,
   			'tarih':'18 Ekim 2017',
   			'yorumMetni':'Kafam çok güzel'
   		}
   	]
   }
    });
};

const yorumEkle = function(req, res) {
  res.render("yorum-ekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
};
