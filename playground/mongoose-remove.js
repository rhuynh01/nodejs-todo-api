const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Remove EVERYTHING, pass in EMPTY Object
// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5c66b70658d122a9df1e96d1'}).then((todo) => {
  console.log(todo)
})


// _id: 5c66b70658d122a9df1e96d1
// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5c66b70658d122a9df1e96d1').then((todo) => {
  console.log(todo)
})
