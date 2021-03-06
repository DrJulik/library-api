const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

// load env vars
dotenv.config({ path: "./config/config.env" });

// connect to db
connectDB();

// Route Files
const libraries = require("./routes/libraries");

const app = express();

// Mount Routes
app.use("/api/libraries", libraries);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} `)
);

// handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
	console.log(`Error ${err.message}`);
	// exit
	server.close(() => {
		process.exit(1);
	});
});
