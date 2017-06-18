const jsonfile = require('jsonfile');
const bot = require('../bot');
const config = require('../config');

module.exports = (msg, zone, page = 1) => {
  jsonfile.readFile('./data/exhibitors.json', (err, exhibitors) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }
    const PER_PAGE = config.EXHIBITORS_PER_PAGE;
    const titles = config.EXHIBITOR_CATEGORY_TITLES;
    const pagingKeyboard = [];
    const opts = {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          pagingKeyboard,
        ],
      },
    };

    const noOfPages = Math.ceil(exhibitors.length / PER_PAGE);
    if (noOfPages > 1) {
      if (page > 1) pagingKeyboard.push({ text: '<<', callback_data: `news,${page - 1}` });
      if (page < noOfPages) pagingKeyboard.push({ text: '>>', callback_data: `news,${Number(page) + 1}` });
    }

    const begin = (page - 1) * PER_PAGE;
    const reply = exhibitors.slice(begin, begin + PER_PAGE).reduce((acc, e, i) => {
      acc = acc + `${i + begin + 1}) [${e.name}](${e.url})\n`;
      return acc;
    }, `*${titles[zone - 1]}*\n`);
    bot.sendMessage(msg.chat.id, reply, opts);
  });
};
