const bot = require('../bot');
const keyboards = require('../constants/keyboards');

module.exports = (msg) => {
  const chatId = msg.chat.id;

  switch (msg.text) {
    case '/start':
      bot.sendMessage(chatId, `Hello ${msg.from.first_name || msg.from.username || ''} 😀 I'm the ICT Expo 🇪🇹 Bot and I'll be your assistant for the event. Check out the keyboard below for some of the things i can help you with!`, {
        reply_markup: JSON.stringify({
          keyboard: keyboards.main,
        }),
      });
      break;
    default:
      bot.sendMessage(chatId, 'Unknown command');
      break;
  }
};
