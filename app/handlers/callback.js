const exhibitors = require('../expo/exhibitors');

module.exports = (callbackQuery) => {
  console.log(callbackQuery);
  const data = JSON.parse(callbackQuery.data);
  const msg = callbackQuery.message;

  switch (data.type) {
    case 'exhibitors':
      exhibitors(msg, data.z, data.p, callbackQuery);
      break;
    default:
      break;
  }
};
