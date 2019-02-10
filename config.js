class Config {
  constructor() {
    if(!Config.instance) {
       Config.instance = this;
    }

    this.languages = ['hu', 'de'];
    this.defaultLang = this.languages[0];

    this.themeColors = [
      {
        name: 'red',
        code: '#ff0000'
      },
      {
        name: 'green',
        code: '#00ff00'
      },
      {
        name: 'blue',
        code: '#0000ff'
      }
    ];

    return Config.instance;
  }
}

const config = new Config();

Object.freeze(config);

module.exports = config;