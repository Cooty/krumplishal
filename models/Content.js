const uuid = require('uuid/v1');

export default class Content {
    
    id = uuid();

    type = '';

    themeColor = '';

    getId() {
        return this.id;
    }

    setType(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }

    setThemeColor(themeColor) {
        this.themeColor = themeColor;
    }

    getThemeColor() {
        return this.themeColor;
    }
}