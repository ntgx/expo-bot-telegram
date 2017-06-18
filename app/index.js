const bot = require('./bot');
const command = require('./handlers/command');
const nlp = require('./handlers/nlp');
const exh = require('./expo/exhibitors');

bot.on('message', (msg) => {
  if (/\/\w+/.exec(msg.text)) command(msg);
  else exh(msg, 1);
});
