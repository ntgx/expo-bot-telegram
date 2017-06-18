const bot = require('../bot');
const keyboards = require('../constants/keyboards');

module.exports = (msg) => {
  const chatId = msg.chat.id;

  switch (msg.text) {
    case '/start':
      bot.sendMessage(chatId, `Hello ${msg.from.first_name || msg.from.username || ''} 😀 I'm the ICT Expo 🇪🇹 Bot and I'll be your assistant for the event. Pick an option from the custom keyboard to get started!`, {
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
