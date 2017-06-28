const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: Number,
  chatId: { type: Number, required: true, unique: true },
  username: String,
  fisrt_name: String,
  last_name: String,
  startedOn: Number,
  phone_number: String,
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('TelegramUser', userSchema);
