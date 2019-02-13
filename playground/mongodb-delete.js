// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // deleteMany (for Todos)
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // deleteMany (for Users)
  // db.collection('Users').deleteMany({name: 'Rodney H'}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne (for Users)
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5c61a317f9a45e25a05a00fc')
  }).then((result) => {
    console.log(result)
  })
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // })

  // db.close()
})