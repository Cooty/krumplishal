exports.singleItemHandler = (data, res) => {
    if(data && typeof(data) === 'object') {
        return res.json(data);
    } else {
        return res.status(204).end();
    };
};