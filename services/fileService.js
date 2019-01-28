const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

exports.getJSONFile = async (path = '') => {
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