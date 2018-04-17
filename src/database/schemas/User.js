import mongoose from 'mongoose'

// Initializes a mongoose schema to be used with the document.
const UserSchema = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  passwordHash: String,
  userType: String
})

// Creates the Schema to be used with the export.
const UserDatabaseModel = mongoose.model('user', UserSchema)

// Exports the schema module.

export default UserDatabaseModel

export { UserSchema }
