const AbstractContent = require('./AbstractContent');
const contentTypes = require('../enum/content-types');

class Quote extends AbstractContent {

    constructor() {
        super();

        this.setType(contentTypes.QUOTE);
    }

    setTitle(title) {
        this.title = title;

        return this;
    }

    setIllustration(illustration) {
        this.illustration = `${process.env.ASSET_URL}${illustration}`;

        return this;
    }

}

module.exports = Quote;