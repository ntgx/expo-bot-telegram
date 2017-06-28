const bot = require('../bot');
const config = require('../config');
const User = require('../models/user');

module.exports = (msg) => {
  const user = new User({
    userId: msg.from.id,
    username: msg.from.username,
    first_name: msg.from.first_name,
    last_name: msg.from.last_name,
    chatId: msg.chat.id,
    startedOn: msg.date,
  });
  user.save();

  bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name || msg.from.username || ''} 😀 I'm the ICT Expo 🇪🇹 Bot and I'll be your assistant for the event. Pick an option from the custom keyboard to get started!`, {
    reply_markup: JSON.stringify({
      keyboard: config.MAIN_KEYBOARD,
    }),
  });
};
