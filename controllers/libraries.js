const Library = require("../models/Library");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
// Get all bootcamps
// GET /api/libraries
// public
exports.getLibraries = asyncHandler(async (req, res, next) => {
	const libraries = await Library.find();

	res.status(200).json({ success: true, data: libraries });
});

// Get one bootcamp
// GET /api/libraries/:id
// public

exports.getLibrary = asyncHandler(async (req, res, next) => {
	const library = await Library.findById(req.params.id);

	if (!library) {
		return next(
			new ErrorResponse(`Library with id ${req.params.id} is not found`, 404)
		);
	}
	res.status(200).json({ success: true, data: library });
});
