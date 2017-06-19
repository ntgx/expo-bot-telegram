const bot = require('../bot');
const config = require('../config');

module.exports = (msg) => {
  bot.sendMessage(msg.chat.id, 'Pick the exhibitor category you\'d like to see below', {
    reply_markup: JSON.stringify({
      keyboard: config.EXHIBITORS_KEYBOARD,
    }),
  });
};
