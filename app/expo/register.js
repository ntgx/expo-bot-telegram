const bot = require('../bot');

module.exports = (msg) => {
  bot.sendMessage(msg.chat.id, 'How old are you?').then((sent) => {
    const chatId = sent.chat.id;
    const messageId = sent.message_id;
    bot.onReplyToMessage(chatId, messageId, (message) => {
      console.log('User is %s years old', message.text);
    });
  });
};
