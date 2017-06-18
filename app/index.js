const bot = require('./bot');
const callback = require('./handlers/callback');
const command = require('./handlers/command');
const nlp = require('./handlers/nlp');

bot.on('message', (msg) => {
  if (/\/\w+/.exec(msg.text)) command(msg);
  else nlp(msg);
});

bot.on('callback_query', callback);
