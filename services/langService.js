const config = require('../config');
const statusCodes = require('status-codes');

exports.getLang = (lang) => {
    if(!lang || !config.languages.includes(lang)) {
        const err = new Error(statusCodes.NOT_FOUND.name);
        err.status = statusCodes.NOT_FOUND.status;

        throw err;
    } else {
        return lang;
    }
};