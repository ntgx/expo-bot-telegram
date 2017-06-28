const bot = require('./bot');
const config = require('./config');
const callback = require('./handlers/callback');
const command = require('./handlers/command');
const nlp = require('./handlers/nlp');

bot.on('text', (msg) => {
  if (/\/\w+/.exec(msg.text)) command(msg);
  else nlp(msg);
});

bot.once('contact', (msg) => {
  bot.sendMessage(msg.chat.id, 'Info saved', {
    reply_markup: JSON.stringify({
      keyboard: config.MAIN_KEYBOARD,
    }),
  });
});

bot.on('callback_query', callback);
