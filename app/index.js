const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');

const token = process.env.EXPO_BOT_TOKEN;
const options = process.env.NODE_ENV === 'production' ? { webHook: { port: config.PORT } } : { polling: true };
const bot = new TelegramBot(token, options);

if (process.env.NODE_ENV === 'production') bot.setWebHook(`${config.EXPO_BOT_URI}:443/bot${token}`);

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});
