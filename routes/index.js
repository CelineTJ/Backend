var express = require('express');
var router = express.Router();

require('.././models/connection');
const Trips =  require ('.././models/trips');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Trouver tous les voyages en fonction du départ et de l'arrivée
//IL FAUDRA AJOUTER LA DATE AVEC LE CALENDRIER
router.get('/trips', (req, res) => {
  Trips.find({
    departure: req.body.departure,
    arrival: req.body.arrival
    //date: Date
  }).then(data => {

    res.json({ trips: data });
  })
});

//










module.exports = router;
