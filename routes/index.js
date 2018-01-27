var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var ejs = require('ejs');
var request = require('request');
var xmlParser = require('xml2js');
var parser = new xmlParser.Parser();
var client;

// 데이터베이스 연결
client = mysql.createConnection({
	user: 'busking',
	password: 'busking',
	database: 'uniton'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 버스 번호

// 배차 정보가 없는 경우
router.get('/busMap/:bus', function(req, res, next){
  var busNum = req.params['bus'];
  console.log(busNum + " 넘어온 데이터");

  var busQuery1 = 'select * from bus1 where b_num=?';
  var busQuery2 = 'select * from bus2 where b_num=?';
  var busQuery3 = 'select * from bus3 where b_num=?';



        client.query(busQuery1, [busNum], function(err, results1){
          client.query(busQuery2, [busNum], function(err, results2){
            client.query(busQuery3, [busNum], function(err, results3){
                res.render('busMap.ejs', {
                  dataStart : results1,
                  dataMid: results2,
                  dataEnd : results3
                });
        });
      });
    });

});


router.get('/busMap2/:bus', function(req, res, next){
  var busNum = req.params['bus'];
  console.log(busNum + " 넘어온 데이터");

  var busQuery4 = 'select * from bus4 where b_num=?';
  var busQuery5 = 'select * from bus5 where b_num=?';
  var busQuery6 = 'select * from bus6 where b_num=?';



        client.query(busQuery4, [busNum], function(err, results4){
          client.query(busQuery5, [busNum], function(err, results5){
            client.query(busQuery6, [busNum], function(err, results6){
                res.render('busMap2.ejs', {
                  dataStart : results4,
                  dataMid: results5,
                  dataEnd : results6
                });
        });
      });
    });

});


router.get('/communication/:bus_id', function(req, res, next){
  var busId = req.params['bus_id'];
  res.render('communication.ejs', {
    busId:busId,
    busNum: 6000
  });
});




router.get('/communication/:bus_id/:bus', function(req, res, next){
  var busId = req.params['bus_id'];
  var busNum = req.params['bus'];
  res.render('communication.ejs', {
    busId:busId,
    busNum:busNum
  });
});

router.get('/communication2/:bus_id', function(req, res, next){
  var busId = req.params['bus_id'];
  res.render('communication2.ejs', {
    busId:busId,
    busNum: 500
  });
});



router.get('/communication2/:bus_id/:bus', function(req, res, next){
  var busId = req.params['bus_id'];
  var busNum = req.params['bus'];
  res.render('communication2.ejs', {
    busId:busId,
    busNum: busNum
  });
});







module.exports = router;
