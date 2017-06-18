const bot = require('../bot');

module.exports = (msg) => {
  bot.sendPhoto(msg.chat.id, 'https://i.imgur.com/cJT4yCo.jpg');
};
