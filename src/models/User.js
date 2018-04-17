// Module Imports
const mongoose = require('mongoose')

export const UserModel = {
  username: '',
  firstName: '',
  lastName: '',
  passwordHash: '',
  userType: ''
}

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
export default User
