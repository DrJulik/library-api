const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
	let error = { ...err };

	error.message = err.message;
	console.log(err.stack);

	// mongoose bad ObjectID
	if (err.name === "CastError") {
		const message = `Resource with id ${err.value} is not found`;
		error = new ErrorResponse(message, 404);
	}

	res.status(error.statusCode || 500).json({
		success: false,
		error: error.message || "Server Error",
	});
};

module.exports = errorHandler;
