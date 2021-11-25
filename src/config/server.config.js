const dotenv = require('dotenv');

dotenv.config();

class ServerConfig {

    env;

    constructor(configObject) {
        this.env = configObject;
    }

    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }

        return value;
    }

    ensureValues(keys) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }

    getPort() {
        return this.getValue('PORT', true);
    }

    isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }
}

const serverConfig = new ServerConfig(process.env)
    .ensureValues([
        'PORT',
        'MONGODB_URI',
        'JWT_SECRET'
    ]);


module.exports = serverConfig;