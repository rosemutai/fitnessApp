import mongoose, { Schema} from 'mongoose'

interface IContact {
  firstName: string,
  lastName: string,
  email: string,
  phone?: number

}

const Contactschema = new Schema<IContact>({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: Number},

})

module.exports = mongoose.model('Contact', Contactschema)
