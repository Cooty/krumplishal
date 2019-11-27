const { singleItemHandler } = require('../handlers/data-handlers');
const dataFolder = `${__dirname}/../data`;

const { getLang } = require('../services/langService');
const { getJSONFile } = require('../services/fileService');

const contentTypes = require('../enum/content-types');

const statusCodes = require('status-codes');

exports.entityList = async (req, res)=> {
    // if() {

    // }
    const keys = Object.keys(contentTypes);

    console.log(keys);

    const contentTypeValues = keys.map(key => {
        return contentTypes[key];
    });

    console.log(contentTypeValues);
    console.log(contentTypeValues.indexOf(req.params.entityName));

    if(contentTypeValues.indexOf(req.params.entityName) < 0) {
        const err = new Error(statusCodes.NOT_FOUND.name);
        err.status = statusCodes.NOT_FOUND.status;

        throw err;
    }

    const path = req.params.lang ?
        `${dataFolder}/${req.params.entityName}/${getLang(req.params.lang)}` :
        `${dataFolder}/${req.params.entityName}`;

    const list = await getJSONFile(`${path}/data.json`);

    return res.json(list);
};

exports.entityById = async (req, res)=> {
    const path = req.params.lang ?
        `${dataFolder}/${req.params.entityName}/${getLang(req.params.lang)}` :
        `${dataFolder}/${req.params.entityName}`;

    const list = await getJSONFile(`${path}/data.json`);

    const dataItem = list.data.find((item) => {
        return item.id === parseInt(req.params.id, 10);
    });

    return singleItemHandler(dataItem, res);
};