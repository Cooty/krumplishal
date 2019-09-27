const uuid = require('uuid/v1');
const themeColors = require('../enum/theme-colors');
const Abstract = require('./Abstract');

class AbstractContent extends Abstract {

    constructor() {
        super();

        this.uiId = uuid();
    }

    setType(type) {
        this.type = type;

        return this;
    }

    setMedia(media) {
        this.media = `${process.env.ASSET_URL}${media}`;

        return this;
    }

    setThemeColor(themeColor) {
        this.themeColor = themeColors[themeColor.toUpperCase()];

        return this;
    }
}

module.exports = AbstractContent;