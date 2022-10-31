const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courtSchema = new Schema({
court: {
  type: String,
  
}, 

  location: {
    type: String

  },

  courtRating: {
    type: String,
    enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    userName: String, 
    userAvatar: String,
    googleId: {type: String}




  // timestamps: true
});

module.exports = mongoose.model('courts', courtSchema);

