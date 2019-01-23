const config = require('../config');

exports.getLang = (lang) => {
    if(!lang || !config.languages.includes(lang)) {
        return config.defaultLang;
    } else {
        return lang;
    }
};