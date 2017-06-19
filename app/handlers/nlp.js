const apiAi = require('apiai');
const bot = require('../bot');
const config = require('../config');
const exhibitorCategories = require('../expo/exhibitor-categories');
const exhibitors = require('../expo/exhibitors');
const speakers = require('../expo/speakers');
const floorMap = require('../expo/floor-map');
const mainMenu = require('../expo/main-menu');
const events = require('../expo/events');

module.exports = (msg) => {
  const apiAiClient = apiAi(config.EXPO_API_AI_TOKEN);
  const apiaiSession = apiAiClient.textRequest(msg.text, { sessionId: msg.chat.id });

  apiaiSession.on('response', (response) => {
    const result = response.result.fulfillment.speech;
    const action = response.result.action;
    const params = response.result.parameters;

    switch (action) {
      case 'intent.menu':
        mainMenu(msg);
        break;
      case 'intent.exhibitors':
        exhibitorCategories(msg);
        break;
      case 'intent.zone':
        exhibitors(msg, Number(params.zone));
        break;
      case 'intent.speakers':
        speakers(msg);
        break;
      case 'intent.events':
        events(msg);
        break;
      case 'intent.floor_plan':
        floorMap(msg);
        break;
      default:
        if (result) bot.sendMessage(msg.chat.id, result);
        break;
    }
  });

  apiaiSession.on('error', error => console.log(error));
  apiaiSession.end();
};
