const bot = require('../bot');

module.exports = (msg) => {
  const chatId = msg.chat.id;

  switch (msg.text) {
    case '/start':
      bot.sendMessage(chatId, 'Start command');
      break;
    default:
      bot.sendMessage(chatId, 'Unknown command');
      break;
  }
};
