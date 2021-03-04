const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ( {
  name: {
    type: String,
    required: [true, 'Name!']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 34,
  review: "Pretty solid as a fruit"
});

//fruit.save();

const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const watermelon = new Fruit({
  name: "Watermelon",
  score: 10,
  review: "Cool fruit"
});

watermelon.save();

// const people = new People ({
//   name: "Amy",
//   age: 22,
//   favouriteFruit: pineapple
// });
//
// people.save();


Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
    // for (var i = 0; i < fruits.length; i++) {
    //       console.log(fruits[i].name);
    // }

  }
});

People.updateOne({_id: "601ccfb625d830053c153726"}, {favouriteFruit: watermelon}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Successgfully updated the document.");
  }

});
// People.deleteMany({name: "Gregory"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successgully deleted the document.");
//   }
// });



//
// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// }
