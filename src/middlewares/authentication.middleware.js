const jwt = require('jsonwebtoken');
const serverConfig = require('../config/server.config');

const authMiddleware = (role) => {
    return (req, res, next) => {

        try {
            const token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, serverConfig.getValue('JWT_SECRET'));

            if (decodedToken.role !== role) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            req.body.userId = decodedToken.id;

            next();
        } catch (e) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    }
}


module.exports = authMiddleware;