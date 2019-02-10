const uuid = require('uuid/v1');

export default class Content {

    constructor(data = {}) {
        this.id = uuid();

        this.type = data.type;

        this.themeColor = data.themeColor;

        this.media = data.media;

        this.illustration = data.illustration;

        this.title = data.title;
    }
}