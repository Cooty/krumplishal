require('./Content');

export default class Gif extends Content {
    constructor(data = {}) {
        super();

        this.data = data;
    }
}