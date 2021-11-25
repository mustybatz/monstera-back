const mongoose = require('mongoose');

async function connectToDb(uri) {

    try {
        await mongoose.connect(uri);
        console.log('DB connection established 😈😈 [uwu]');
    } catch (error) {
        console.error(`DB connection failed ❌❌ [unu], [Error]: ${error}`);
    }

}

module.exports = connectToDb;