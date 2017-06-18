const EXPO_BOT_URI = 'https://expo-bot-telegram.herokuapp.com';
const PORT = process.env.PORT;

const EXPO_API_AI_TOKEN = process.env.EXPO_API_AI_TOKEN;

const EXHIBITORS_PER_PAGE = 10;
const EXHIBITOR_CATEGORY_TITLES = [
  '🌐 Software 🌐',
  '🕹 Hardware 🕹',
  '🎯 Service 🎯',
  '🏛 Government 🏛',
  '🎓 Academia 🎓',
  '🚀 SME & Startup 🚀',
];

module.exports = {
  EXPO_BOT_URI,
  PORT,
  EXPO_API_AI_TOKEN,

  EXHIBITORS_PER_PAGE,
  EXHIBITOR_CATEGORY_TITLES,
};
