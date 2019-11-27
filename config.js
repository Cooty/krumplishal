class Config {
  constructor() {
    if(!Config.instance) {
       Config.instance = this;
    }

    this.languages = ['hu', 'de'];
    this.defaultLang = this.languages[0];

    return Config.instance;
  }
}

const config = new Config();

Object.freeze(config);

module.exports = config;