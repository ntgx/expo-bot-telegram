const EXPO_BOT_URI = 'https://expo-bot-telegram.herokuapp.com';
const PORT = process.env.PORT;

const EXPO_API_AI_TOKEN = process.env.EXPO_API_AI_TOKEN;

const SPEAKERS_PER_PAGE = 10;
const EXHIBITORS_PER_PAGE = 10;
const EXHIBITOR_CATEGORY_TITLES = [
  '🌐 Software 🌐',
  '🕹 Hardware 🕹',
  '🎯 Service 🎯',
  '🏛 Government 🏛',
  '🎓 Academia 🎓',
  '🚀 SME & Startup 🚀',
];

const MAIN_KEYBOARD = [
  ['🎪 Exhibitors', '📅 Schedule'],
  ['🤓 Speakers', '🎭 Events'],
  ['✍️ Register', '💸 Sponsors'],
];

const EXHIBITORS_KEYBOARD = [
  ['🌐 Software', '🕹 Hardware'],
  ['🎯 Service', '🏛 Government'],
  ['🎓 Academia', '🚀 SME & Startup'],
  ['🔙 Main Menu'],
];

module.exports = {
  EXPO_BOT_URI,
  PORT,
  EXPO_API_AI_TOKEN,

  SPEAKERS_PER_PAGE,
  EXHIBITORS_PER_PAGE,
  EXHIBITOR_CATEGORY_TITLES,

  MAIN_KEYBOARD,
  EXHIBITORS_KEYBOARD,
};
