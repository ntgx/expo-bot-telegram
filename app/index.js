require('./db');
const bot = require('./bot');
const callback = require('./handlers/callback');
const command = require('./handlers/command');
const nlp = require('./handlers/nlp');
const saveLottoPlayer = require('./expo/save-lotto-player');

bot.on('text', (msg) => {
  if (/\/\w+/.exec(msg.text)) command(msg);
  else nlp(msg);
});

bot.on('contact', (msg) => {
  saveLottoPlayer(msg);
});

bot.on('callback_query', callback);
