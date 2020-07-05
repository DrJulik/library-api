const mongoose = require("mongoose");

const LibrarySchema = new mongoose.Schema({
	name: String,
	slug: String,
	manager: String,
	location: {
		type: {
			type: String,
			enum: ["Point"],
		},
		coordinates: {
			type: [Number],
			index: "2dsphere",
		},
		formattedAddress: String,
		street: String,
		city: String,
		zipcode: String,
	},
});

module.exports = mongoose.model("Library", LibrarySchema);
