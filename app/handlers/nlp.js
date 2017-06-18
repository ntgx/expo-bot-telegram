const apiAi = require('apiai');
const bot = require('../bot');
const config = require('../config');
const exhibitorCategories = require('../expo/exhibitor-categories');

module.exports = (msg) => {
  const apiAiClient = apiAi(config.EXPO_API_AI_TOKEN);
  const apiaiSession = apiAiClient.textRequest(msg.text, { sessionId: msg.chat.id });

  apiaiSession.on('response', (response) => {
    const result = response.result.fulfillment.speech;

    switch (response.result.action) {
      case 'intent.exhibitors':
        exhibitorCategories(msg);
        break;
      default:
        if (result) bot.sendMessage(msg.chat.id, result);
        break;
    }
  });

  apiaiSession.on('error', error => console.log(error));
  apiaiSession.end();
};
