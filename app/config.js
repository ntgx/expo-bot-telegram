const EXPO_BOT_TOKEN = process.env.EXPO_BOT_TOKEN;
const EXPO_BOT_URI = 'https://expo-bot-telegram.herokuapp.com';
const PORT = process.env.PORT;

const EXPO_API_AI_TOKEN = process.env.EXPO_API_AI_TOKEN;

const SPEAKERS_PER_PAGE = 10;
const EXHIBITORS_PER_PAGE = 10;
const SPONSORS_PER_PAGE = 10;


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

const DAYS = [
  'Wednesday, June 28',
  'Thursday, June 29',
  'Friday, June 30',
  'Saturday, July 1',
  'Sunday, July 2',
];

const SPONSOR_TYPES = {
  organizer: '🇪🇹 Organizer',
  facilitator: '🎪 Facilitator',
  official_carrier: '✈️ Official Carrier',
  media_partner: '📺 Media Partner',
  partner: '🎖 Partner',
  platinum_sponsor: '🥇 Platinum Sponsor',
  silver_sponsor: '🥈 Silver Sponsor',
  bronze_sponsor: '🥉 Bronze Sponsor',
};

module.exports = {
  EXPO_BOT_TOKEN,
  EXPO_BOT_URI,
  PORT,
  EXPO_API_AI_TOKEN,

  SPEAKERS_PER_PAGE,
  EXHIBITORS_PER_PAGE,
  SPONSORS_PER_PAGE,
  EXHIBITOR_CATEGORY_TITLES,

  MAIN_KEYBOARD,
  EXHIBITORS_KEYBOARD,

  DAYS,
  SPONSOR_TYPES,
};
