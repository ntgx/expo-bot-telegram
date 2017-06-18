const bot = require('../bot');
const keyboards = require('../constants/keyboards');

module.exports = (msg) => {
  bot.sendMessage(msg.chat.id, 'Pick the exhibitor category you\'d like to see below', {
    reply_markup: JSON.stringify({
      keyboard: keyboards.exhibitors,
    }),
  });
};
