const bot = require('../bot');

module.exports = (msg) => {
  bot.sendMessage(msg.chat.id, 'Send your phone number to register for the expo lottery', {
    reply_markup: JSON.stringify({
      keyboard: [
        [{ text: 'Send 📞', request_contact: true }],
        ['🔙 Main Menu'],
      ],
      resize_keyboard: true,
    }),
  });
};
