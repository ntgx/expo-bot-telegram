const bot = require('./bot');
const keyboards = require('./constants/keyboards');

module.exports = (msg) => {
  bot.sendMessage(msg.chat.id, 'Pick an option from the custom keyboard to get started!', {
    reply_markup: JSON.stringify({
      keyboard: keyboards.main,
    }),
  });
};
