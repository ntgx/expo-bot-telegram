const jsonfile = require('jsonfile');
const bot = require('../bot');
const config = require('../config');

module.exports = (msg, page = 1, callbackQuery) => {
  jsonfile.readFile('./data/sponsors.json', (err, sponsors) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }

    const PER_PAGE = config.SPONSORS_PER_PAGE;
    const types = config.SPONSOR_TYPES;
    const pagingKeyboard = [];
    const opts = {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          pagingKeyboard,
        ],
      },
    };

    const noOfPages = Math.ceil(sponsors.length / PER_PAGE);
    if (noOfPages > 1) {
      if (page > 1) pagingKeyboard.push({ text: '<<', callback_data: JSON.stringify({ type: 'sponsors', page: page - 1 }) });
      if (page < noOfPages) pagingKeyboard.push({ text: '>>', callback_data: JSON.stringify({ type: 'sponsors', page: page + 1 }) });
    }

    const begin = (page - 1) * PER_PAGE;
    const reply = sponsors.slice(begin, begin + PER_PAGE).reduce((acc, s, i) => {
      acc = `${acc}${i + begin + 1}) [${s.name}](${s.url})\n- ${s.slogan}\n_${types[s.type]}_\n\n`; // eslint-disable-line no-param-reassign
      return acc;
    }, '*💸 Sponsors 💸*\n');

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
