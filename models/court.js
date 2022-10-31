const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courtSchema = new Schema({
court: {
  type: String,
  
}, 
  courtDays: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },


  // timestamps: true
});

module.exports = mongoose.model('courts', courtSchema);

