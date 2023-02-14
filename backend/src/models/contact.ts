import mongoose, { Schema} from 'mongoose'

interface IContact {
  firstName: string,
  lastName: string,
  email: string,
  message: string

}

const Contactschema = new Schema<IContact>({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  message: {type: String},

})

module.exports = mongoose.model('Contact', Contactschema)
