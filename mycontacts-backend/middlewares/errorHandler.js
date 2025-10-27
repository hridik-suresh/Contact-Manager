const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
    if (statusCode === 400) {
        res.json({ title: "Validation Error", message: err.message, stack: err.stack });
    }else if (statusCode === 401) {
        res.json({ title: "Unauthorized", message: err.message, stack: err.stack });
    }else if (statusCode === 403) {
        res.json({ title: "Forbidden", message: err.message, stack: err.stack });
    }else if (statusCode === 404) {
        res.json({ title: "Not Found", message: err.message, stack: err.stack });
    } else {
        res.json({ title: "Server Error", message: "Something went wrong", stack: err.stack });
    }
}
module.exports = { errorHandler };