const fs = require('fs');
const { promisify } = require('util');
const { singleItemHandler } = require('../handlers/dataHandlers');
const dataFolder = `${__dirname}/../data`;
const readFileAsync = promisify(fs.readFile);
const { getLang } = require('../services/langService');

const getJSONFile = async (path = '') => {
    try {
        const file = await readFileAsync(
            path,
            { encoding: 'utf-8' }
        );

        return JSON.parse(file);
    } catch (error) {
        throw error;
    }

};

exports.gifs = async (req, res) => {
    const gifs = await getJSONFile(`${dataFolder}/gifs/data.json`);

    return res.json(gifs);
};

exports.gifById = async (req, res) => {
    const id = parseInt(req.params.id);
    const gifs = await getJSONFile(`${dataFolder}/gifs/data.json`);

    const gif = gifs.data.find((item) => {
        return item.id === id;
    });

    return singleItemHandler(gif, res);
}

exports.music = async (req, res) => {
    const lang = getLang(req.params.lang);

    const music = await getJSONFile(`${dataFolder}/music/${lang}/data.json`);

    return res.json(music);
};

exports.musicTrackById = async (req, res) => {
    const id = parseInt(req.params.id);
    const lang = getLang(req.params.lang);

    const music = await getJSONFile(`${dataFolder}/music/${lang}/data.json`);

    const musicTrack = music.data.find((item) => {
        return item.id === id;
    });

    return singleItemHandler(musicTrack, res);
};

exports.quotes = async (req, res) => {
    const lang = getLang(req.params.lang);

    const quotes = await getJSONFile(`${dataFolder}/quotes/${lang}/data.json`);

    return res.json(quotes);
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

exports.soundfxs = async (req, res) => {
    const lang = getLang(req.params.lang);

    const soundfxs = await getJSONFile(`${dataFolder}/soundfxs/${lang}/data.json`);

    return res.json(soundfxs);
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