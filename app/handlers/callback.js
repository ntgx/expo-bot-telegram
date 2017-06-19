const exhibitors = require('../expo/exhibitors');
const speakers = require('../expo/speakers');

module.exports = (callbackQuery) => {
  const data = JSON.parse(callbackQuery.data);
  const msg = callbackQuery.message;

  switch (data.type) {
    case 'exhibitors':
      exhibitors(msg, data.z, data.p, callbackQuery);
      break;
    case 'speakers':
      speakers(msg, data.p, callbackQuery);
      break;
    default:
      break;
  }
};
