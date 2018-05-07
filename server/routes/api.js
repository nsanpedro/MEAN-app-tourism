const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


//Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://nicosp:yoryis2105@ds149309.mlab.com:49309/hoteles', (err, db) => {
    if(err) return console.info(err);
    closure(db);
  });

};

//Error Handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

//Response Handling
let response = {
  status: 200,
  data: [],
  message: null
};


//Get de Hoteles
router.get('/hoteles', (req, res) => {
    connection((db) => {
      db.collection('Hotels')
        .find()
        .toArray()
        .then((hoteles) => {
          response.data = hoteles;
          res.json(response);
        })
        .catch((err) => {
          sendError(err, res);
        });
    });
});

//Get de hoteles por id

router.get('/hoteles/:id', (req, res) => {
  connection((db) => {
    db.collection('Hotels')
      .find()
      .toArray()
      .then((hoteles) => {
        response.data = hoteles._id;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});


module.exports = router;
