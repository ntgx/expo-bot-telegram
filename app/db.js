const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect(config.EXPO_MONGO_URI);

const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => {
  console.log("we're connected!");
});
