const bot = require('./bot');
const command = require('./handlers/command');

bot.on('message', (msg) => {
  if (/\/\w+/.exec(msg.text)) command(msg);
  else {
    // TODO pass msg on to nlp handler
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Received your message');
  }
});
