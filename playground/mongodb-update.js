// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // findOneAndUpdate (Todos)
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5c6569f3949b3fbba5c39075")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  // findOneAndUpdate (Users)
  db.collection("Users")
    .findOneAndUpdate(
      { location: "Tulsa" },
      {
        $set: { name: "Rodney_updated" },
        $inc: { age: 1 }
      },
      { returnOriginal: false }
    )
    .then(result => {
      console.log(result);
    });

  // db.close()
});
