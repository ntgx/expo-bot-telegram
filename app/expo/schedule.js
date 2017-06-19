const jsonfile = require('jsonfile');
const bot = require('../bot');
const config = require('../config');

module.exports = (msg, day = 0, callbackQuery) => {
  jsonfile.readFile('./data/schedule.json', (err, schedule) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }

    const daysKeyboard = config.DAYS.reduce((rows, d, i) => {
      const row = { text: d, callback_data: JSON.stringify({ type: 'schedule', day: i }) };
      return (i % 2 === 0 ? rows.push([row]) : rows[rows.length - 1].push(row)) && rows;
    }, []);

    const opts = {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: daysKeyboard,
      },
    };

    const reply = schedule[day].reduce((acc, s, i) => {
      acc = `${acc}${i + 1}) [${s.title}](${s.url})\n📍${s.time} ${s.venue ? `(${s.venue})` : ''}\n\n`; // eslint-disable-line no-param-reassign
      return acc;
    }, `*📅 ${config.DAYS[day]} 📅*\n`);

    if (callbackQuery) {
      opts.chat_id = msg.chat.id;
      opts.message_id = msg.message_id;
      bot.editMessageText(reply, opts);
      bot.answerCallbackQuery(callbackQuery.id, '👍🏽', false);
      return;
    }

    bot.sendMessage(msg.chat.id, reply, opts);
  });
};
