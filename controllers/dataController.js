const fs = require('fs');
const { promisify } = require('util');
const { singleItemHandler } = require('../handlers/dataHandlers');
const dataFolder = `${__dirname}/../data`;
const readFileAsync = promisify(fs.readFile);

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

    const data = gifs.data;
    const gif = data.find((item) => {
        return item.id === id;
    });

    return singleItemHandler(gif, res);
}

exports.music = (req, res) => {
    res.json({
        music: 'it works!'
    });
};

exports.quotes = (req, res) => {
    res.json({
        quotes: 'it works!'
    });
};

exports.soundfx = (req, res) => {
    res.json({
        soundfx: 'it works!'
    });
};