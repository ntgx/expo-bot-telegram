const bot = require('./bot');
const command = require('./handlers/command');
const nlp = require('./handlers/nlp');

bot.on('message', (msg) => {
  if (/\/\w+/.exec(msg.text)) command(msg);
  else nlp(msg);
});
