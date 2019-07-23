const { singleItemHandler } = require('../handlers/dataHandlers');
const dataFolder = `${__dirname}/../data`;

const { getLang } = require('../services/langService');
const { getJSONFile } = require('../services/fileService');

exports.gifById = async (req, res) => {
    const id = parseInt(req.params.id);
    const gifs = await getJSONFile(`${dataFolder}/gif/data.json`);

    const gif = gifs.data.find((item) => {
        return item.id === id;
    });

    return singleItemHandler(gif, res);
}

////////////////////////////////////////
exports.entityList = async (req, res)=> {
    const path = req.params.lang ?
        `${dataFolder}/${req.params.entityName}/${getLang(req.params.lang)}` :
        `${dataFolder}/${req.params.entityName}`;

    const list = await getJSONFile(`${path}/data.json`);

    return res.json(list);
};

exports.entityById = async (req, res)=> {
    const id = parseInt(req.params.id);
    const lang = getLang(req.params.lang);

    const music = await getJSONFile(`${dataFolder}/music/${lang}/data.json`);

    const musicTrack = music.data.find((item) => {
        return item.id === id;
    });

    return singleItemHandler(musicTrack, res);
};
///////////////////////////////////////


exports.musicTrackById = async (req, res) => {
    const id = parseInt(req.params.id);
    const lang = getLang(req.params.lang);

    const music = await getJSONFile(`${dataFolder}/music/${lang}/data.json`);

    const musicTrack = music.data.find((item) => {
        return item.id === id;
    });

    return singleItemHandler(musicTrack, res);
};

exports.quoteById = async (req, res) => {
    const id = parseInt(req.params.id);
    const lang = getLang(req.params.lang);

    const quotes = await getJSONFile(`${dataFolder}/quotes/${lang}/data.json`);

    const quote = quotes.data.find((item) => {
        return item.id === id;
    });

    return singleItemHandler(quote, res);
};

exports.soundfxById = async (req, res) => {
    const id = parseInt(req.params.id);
    const lang = getLang(req.params.lang);

    const soundfxs = await getJSONFile(`${dataFolder}/quotes/${lang}/data.json`);

    const soundfx = soundfxs.data.find((item) => {
        return item.id === id;
    });

    return singleItemHandler(soundfx, res);
};