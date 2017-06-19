const jsonfile = require('jsonfile');
const bot = require('../bot');

module.exports = (msg) => {
  jsonfile.readFile('./data/events.json', (err, events) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }

    const reply = events.reduce((acc, e, i) => {
      acc = `${acc}${i + 1}) ${e.title}\n_${e.desc}_\n⏰ ${e.datetime}\n\n`; // eslint-disable-line no-param-reassign
      return acc;
    }, '*🗓 Events 🗓*\n');

    bot.sendMessage(msg.chat.id, reply, { parse_mode: 'Markdown' });
  });
};
