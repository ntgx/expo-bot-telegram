const bot = require('../bot');
const config = require('../config');
const User = require('../models/user');

/* eslint-disable no-param-reassign */
module.exports = (msg) => {
  User.findOne({ userId: msg.contact.user_id }).then((user) => {
    user.registeredForLotto = true;
    user.phone_number = msg.contact.phone_number;
    return user.save();
  }).then(() => {
    bot.sendMessage(msg.chat.id, 'Registered successfuly, I\'ll send you a message here if you win 😉', {
      reply_markup: JSON.stringify({
        keyboard: config.MAIN_KEYBOARD,
      }),
    });
  }).catch((err) => {
    console.log('error updating user:', err);
    bot.sendMessage(msg.chat.id, 'Something went wrong! Please try again in a bit!', {
      reply_markup: JSON.stringify({
        keyboard: config.MAIN_KEYBOARD,
      }),
    });
  });
};
