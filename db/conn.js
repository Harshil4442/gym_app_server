require('dotenv').config();
const mongoose = require("mongoose");
const DB =process.env.DATABASE;

mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
   }).then(() => {
    console.log('Connection is successfull');

}).catch((err) => {
    console.log(err);
}
)