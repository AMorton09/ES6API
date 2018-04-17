import mongoose from 'mongoose'

// Initializes a mongoose schema to be used with the document
const userSchema = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  passwordHash: String,
  userType: String
})

// Creates the Schema to be used with the export
let User = mongoose.model('user', userSchema)

// Exports the Schema to the API
module.exports = User
