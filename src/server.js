const connectToDb = require("./config/db.connection");

class Server {

    PORT;
    APP;
    MONGO_URI;

    constructor(app, port, mongo_uri) {
        this.APP = app;
        this.PORT = port;
        this.MONGO_URI = mongo_uri;
    }

    listen() {
        this.APP.listen(this.PORT, () => {
            console.log(`Server listening on port: [${this.PORT}] 🚢🚢`);
        });

        this.connectDb().then(_data => {
            console.log('Server bootstraping finished.');
        });

    }

    async connectDb() {
        await connectToDb(this.MONGO_URI);
    }


}

module.exports = Server;