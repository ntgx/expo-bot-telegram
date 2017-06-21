const exhibitors = require('../expo/exhibitors');
const speakers = require('../expo/speakers');
const schedule = require('../expo/schedule');
const sponsors = require('../expo/sponsors');

module.exports = (callbackQuery) => {
  const data = JSON.parse(callbackQuery.data);
  const msg = callbackQuery.message;

  switch (data.type) {
    case 'exhibitors':
      exhibitors(msg, data.zone, data.page, callbackQuery);
      break;
    case 'speakers':
      speakers(msg, data.page, callbackQuery);
      break;
    case 'sponsors':
      sponsors(msg, data.page, callbackQuery);
      break;
    case 'schedule':
      schedule(msg, data.day, callbackQuery);
      break;
    default:
      break;
  }
};
