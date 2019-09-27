const statusCodes = require('status-codes');

/*
  Catch Errors Handler

  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch any errors they throw, and pass it along to our express middleware with next()
*/

exports.catchErrors = (fn) => {
    return function(req, res, next) {
        return fn(req, res, next).catch(next);
    };
};

/*
Not Found Error Handler

If we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
*/
exports.notFound = (req, res, next) => {
    const err = new Error(statusCodes.NOT_FOUND.name);
    err.status = statusCodes.NOT_FOUND.status;

    return next(err);
};

const setStatusCode = (status) => status || statusCodes.NOT_FOUND.status;
const getErrorMessage = (statusCode) => statusCode === statusCodes.NOT_FOUND.status ? 
    statusCodes.NOT_FOUND.name : 
    statusCodes.INTERNAL_SERVER_ERROR.name;

exports.developmentErrors = (err, req, res, next) => {
    const statusCode = setStatusCode(err.status);
    
    err.stack = err.stack || '';

    res.status(statusCode);
    
    return res.json({
        message: getErrorMessage(statusCode),
        statusCode: statusCode,
        stackTracke: err.stack
    });
};

/*
  Production Error Handler

  No stacktraces are leaked to user
*/
exports.productionErrors = (err, req, res, next) => {
    const statusCode = setStatusCode(err.status);

    res.status(statusCode);
    
    return res.json({
        message: getErrorMessage(statusCode),
        statusCode: statusCode
    });
};