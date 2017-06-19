const bot = require('../bot');
const config = require('../config');

module.exports = (msg) => {
  bot.sendMessage(msg.chat.id, 'Pick an option from the custom keyboard to get started!', {
    reply_markup: JSON.stringify({
      keyboard: config.MAIN_KEYBOARD,
    }),
  });
};
