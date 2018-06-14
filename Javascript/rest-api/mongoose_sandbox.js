'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sandbox');

const db = mongoose.connection;

db.on('error', (err) => {
  console.log("Connection error:", err);
});

db.once('open', () => {
  console.log('db connection succesful');
  // All database communication goes here

  const Schema = mongoose.Schema;
  const AnimalSchema = new Schema({
    type: {type: String, default: 'goldfish'},
    size: {type: String, default: 'small'},
    color: {type: String, default: 'golden'},
    mass: {type: Number, default: 0.007},
    name: {type: String, default: 'Nemo'}
  });

  let Animal = mongoose.model('Animal', AnimalSchema);

  let elephant = new Animal({
    type: 'elephant',
    size: 'big',
    color: 'gray',
    mass: 6000,
    name: 'Lawrence'
  });

  let def = new Animal({});

  let whale = new Animal({
    type: 'whale',
    size: 'big',
    mass: 190500,
    name: 'Fig'
  });

  Animal.remove({}, (err) => {
    if (err) console.log('Save Failed.', err);
    elephant.save((err) => {
      if (err) console.log('Save Failed.', err);
      def.save((err) => {
        if (err) console.log('Save Failed.', err);
        whale.save((err) => {
          if (err) console.log('Save Failed.', err);
          Animal.find({size: 'big'}, (err, animals) => {
            animals.forEach((animal) => {
              console.log(animal.name + " the " + animal.color + " " + animal.type);
            });
          });
          db.close(() => {
            console.log('db connection closed');
          });
        });
      });
    });
  });


});
