const { singleItemHandler } = require('../handlers/dataHandlers');
const dataFolder = `${__dirname}/../data`;

const { getLang } = require('../services/langService');
const { getJSONFile } = require('../services/fileService');

exports.entityList = async (req, res)=> {
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