const bot = require('../bot');
const start = require('../expo/start');
const floorMap = require('../expo/floor-map');

module.exports = (msg) => {
  const chatId = msg.chat.id;

  switch (msg.text) {
    case '/start':
      start(msg);
      break;
    case '/FloorMap':
      floorMap(msg);
      break;
    default:
      bot.sendMessage(chatId, 'Unknown command');
      break;
  }
};
