const bot = require('../bot');

module.exports = (msg) => {
  const chatId = msg.chat.id;

  switch (msg.text) {
    case '/start':
      bot.sendMessage(chatId, `Hello ${msg.from.first_name || msg.from.username || ''} 😀 I'm the ICT Expo 2017 Bot 🤖 and I'll be your assistant for the event. Check out the keyboard below for some of the things i can help you with!`);
      break;
    default:
      bot.sendMessage(chatId, 'Unknown command');
      break;
  }
};
