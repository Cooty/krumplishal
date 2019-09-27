// https://stackoverflow.com/questions/29480569/does-ecmascript-6-have-a-convention-for-abstract-classes

class Abstract {
    constructor() {
        if (new.target === Abstract) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }
}

module.exports = Abstract;