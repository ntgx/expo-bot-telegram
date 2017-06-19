const exhibitors = require('../expo/exhibitors');
const speakers = require('../expo/speakers');
const schedule = require('../expo/schedule');

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
    case 'schedule':
      schedule(msg, data.day, callbackQuery);
      break;
    default:
      break;
  }
};
