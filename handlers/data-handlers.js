const statusCodes = require('status-codes');

exports.singleItemHandler = (data, res) => {
    if(data && typeof(data) === 'object') {
        return res.json(data);
    } else {
        return res.status(statusCodes.NO_CONTENT.status).end();
    };
};