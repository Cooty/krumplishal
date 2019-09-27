const AbstractContent = require('./AbstractContent');
const contentTypes = require('../enum/content-types');

class Gif extends AbstractContent {

    constructor() {
        super();

        this.setType(contentTypes.GIF);
    }
}

module.exports = Gif;